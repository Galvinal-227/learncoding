import React, { useState, useEffect, useRef, useCallback } from 'react';

// ============================================================
// CONFIG
// ============================================================
const Config = {
  PALETTES: {
    Commodore: {
      C64: [
        "#000000", "#FFFFFF", "#68372B", "#70A4B2",
        "#6F3D86", "#588D43", "#352879", "#B8C76F",
        "#6F4F25", "#433900", "#9A6759", "#444444",
        "#6C6C6C", "#9AD284", "#6C5EB5", "#959595"
      ]
    }
  }
};


const PixelStudio= () => {
  const [tool, setTool] = useState('pencil');
  const [color, setColor] = useState('#000000');
  const [zoom, setZoom] = useState(10);
  const [canvasSize, setCanvasSize] = useState(64);
  const [isDrawing, setIsDrawing] = useState(false);
  const [mirrorH, setMirrorH] = useState(false);
  const [mirrorV, setMirrorV] = useState(false);
  const [brushSize, setBrushSize] = useState(1);
  const [brushShape, setBrushShape] = useState('square');
  const [showGrid, setShowGrid] = useState(true);
  const [showCRT, setShowCRT] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [frames, setFrames] = useState([]);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fps, setFps] = useState(12);
  const [onionSkin, setOnionSkin] = useState(false);
  const [loop, setLoop] = useState(true);
  const [layers, setLayers] = useState([]);
  const [activeLayer, setActiveLayer] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showNewDoc, setShowNewDoc] = useState(false);

  // ===== REFS =====
  const canvasRef = useRef(null);
  const gridCanvasRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const ctxRef = useRef(null);
  const gridCtxRef = useRef(null);
  const previewCtxRef = useRef(null);
  const isDrawingRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const previewDataRef = useRef(null);

  // ===== INIT =====
  useEffect(() => {
    const canvas = canvasRef.current;
    const gridCanvas = gridCanvasRef.current;
    const previewCanvas = previewCanvasRef.current;

    if (canvas) {
      ctxRef.current = canvas.getContext('2d', { willReadFrequently: true });
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      ctxRef.current.fillStyle = '#ffffff';
      ctxRef.current.fillRect(0, 0, canvasSize, canvasSize);
    }

    if (gridCanvas) {
      gridCtxRef.current = gridCanvas.getContext('2d');
      gridCanvas.width = canvasSize * zoom;
      gridCanvas.height = canvasSize * zoom;
      drawGrid();
    }

    if (previewCanvas) {
      previewCtxRef.current = previewCanvas.getContext('2d');
      previewCanvas.width = canvasSize;
      previewCanvas.height = canvasSize;
    }

    // Init layers
    setLayers([{ id: 0, name: 'Background', visible: true, opacity: 1 }]);
    setActiveLayer(0);

    // Init frames
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvasSize;
    tempCanvas.height = canvasSize;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.fillStyle = '#ffffff';
    tempCtx.fillRect(0, 0, canvasSize, canvasSize);
    tempCtx.drawImage(canvas, 0, 0);
    setFrames([{ canvas: tempCanvas, ctx: tempCtx }]);
    setCurrentFrame(0);

    updatePreview();
  }, []);

  // ===== DRAW GRID =====
  const drawGrid = useCallback(() => {
    const gridCtx = gridCtxRef.current;
    const gridCanvas = gridCanvasRef.current;
    if (!gridCtx || !gridCanvas) return;

    const w = gridCanvas.width;
    const h = gridCanvas.height;
    const s = zoom;

    gridCtx.clearRect(0, 0, w, h);
    gridCtx.strokeStyle = 'rgba(102, 102, 102, 0.5)';
    gridCtx.lineWidth = 1;
    gridCtx.beginPath();
    for (let x = 0; x <= w; x += s) {
      gridCtx.moveTo(x, 0);
      gridCtx.lineTo(x, h);
    }
    for (let y = 0; y <= h; y += s) {
      gridCtx.moveTo(0, y);
      gridCtx.lineTo(w, y);
    }
    gridCtx.stroke();
  }, [zoom]);

  // ===== UPDATE PREVIEW =====
  const updatePreview = useCallback(() => {
    const previewCtx = previewCtxRef.current;
    const canvas = canvasRef.current;
    if (!previewCtx || !canvas) return;
    previewCtx.clearRect(0, 0, canvasSize, canvasSize);
    previewCtx.drawImage(canvas, 0, 0);
  }, [canvasSize]);

  // ===== DRAW PIXEL =====
  const drawPixel = useCallback((x, y, color) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    x = Math.max(0, Math.min(Math.floor(x), canvasSize - 1));
    y = Math.max(0, Math.min(Math.floor(y), canvasSize - 1));

    const half = Math.floor(brushSize / 2);

    if (brushSize === 1) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 1, 1);
    } else if (brushShape === 'square') {
      ctx.fillStyle = color;
      ctx.fillRect(x - half, y - half, brushSize, brushSize);
    } else if (brushShape === 'circle') {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x + 0.5, y + 0.5, brushSize / 2, 0, Math.PI * 2);
      ctx.fill();
    } else if (brushShape === 'diamond') {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(x, y - half);
      ctx.lineTo(x + half, y);
      ctx.lineTo(x, y + half);
      ctx.lineTo(x - half, y);
      ctx.closePath();
      ctx.fill();
    }

    updatePreview();
  }, [canvasSize, brushSize, brushShape, updatePreview]);

  // ===== GET MIRRORED POINTS =====
  const getMirroredPoints = useCallback((x, y) => {
    const points = [{ x, y }];
    const w = canvasSize;
    const h = canvasSize;

    if (mirrorH) points.push({ x: w - 1 - x, y });
    if (mirrorV) points.push({ x, y: h - 1 - y });
    if (mirrorH && mirrorV) points.push({ x: w - 1 - x, y: h - 1 - y });

    return points;
  }, [canvasSize, mirrorH, mirrorV]);

  // ===== DRAW LINE =====
  const drawLine = useCallback((x0, y0, x1, y1, color) => {
    const plot = (x, y) => drawPixel(x, y, color);
    const points = getMirroredPoints(x0, y0);
    points.forEach(p => drawPixel(p.x, p.y, color));

    const dx = Math.abs(x1 - x0);
    const sx = x0 < x1 ? 1 : -1;
    const dy = -Math.abs(y1 - y0);
    const sy = y0 < y1 ? 1 : -1;
    let err = dx + dy;

    let x = x0, y = y0;
    while (true) {
      const mirrored = getMirroredPoints(x, y);
      mirrored.forEach(p => drawPixel(p.x, p.y, color));

      if (x === x1 && y === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x += sx; }
      if (e2 <= dx) { err += dx; y += sy; }
    }
  }, [drawPixel, getMirroredPoints]);

  // ===== FLOOD FILL =====
  const floodFill = useCallback((x, y, color) => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    x = Math.max(0, Math.min(x, canvasSize - 1));
    y = Math.max(0, Math.min(y, canvasSize - 1));

    const img = ctx.getImageData(0, 0, canvasSize, canvasSize);
    const d = img.data;
    const pos = (y * canvasSize + x) * 4;
    const r0 = d[pos], g0 = d[pos + 1], b0 = d[pos + 2];

    const r = parseInt(color.slice(1, 3), 16) || 0;
    const g = parseInt(color.slice(3, 5), 16) || 0;
    const b = parseInt(color.slice(5, 7), 16) || 0;

    if (r0 === r && g0 === g && b0 === b) return;

    const getPixel = (px, py) => {
      if (px < 0 || px >= canvasSize || py < 0 || py >= canvasSize) return false;
      const p = (py * canvasSize + px) * 4;
      return d[p] === r0 && d[p + 1] === g0 && d[p + 2] === b0;
    };

    const setPixel = (px, py) => {
      const p = (py * canvasSize + px) * 4;
      d[p] = r;
      d[p + 1] = g;
      d[p + 2] = b;
      d[p + 3] = 255;
    };

    const stack = [[x, y]];
    while (stack.length) {
      const [cx, cy] = stack.pop();
      if (!getPixel(cx, cy)) continue;

      let leftX = cx;
      while (leftX > 0 && getPixel(leftX - 1, cy)) leftX--;

      let rightX = cx;
      while (rightX < canvasSize - 1 && getPixel(rightX + 1, cy)) rightX++;

      for (let px = leftX; px <= rightX; px++) setPixel(px, cy);

      for (let px = leftX; px <= rightX; px++) {
        if (cy > 0 && getPixel(px, cy - 1)) stack.push([px, cy - 1]);
        if (cy < canvasSize - 1 && getPixel(px, cy + 1)) stack.push([px, cy + 1]);
      }
    }

    ctx.putImageData(img, 0, 0);
    updatePreview();
  }, [canvasSize, updatePreview]);

  // ===== MOUSE EVENTS =====
  const getCoords = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    let x = Math.floor((clientX - rect.left) / (rect.width / canvasSize));
    let y = Math.floor((clientY - rect.top) / (rect.height / canvasSize));

    x = Math.max(0, Math.min(x, canvasSize - 1));
    y = Math.max(0, Math.min(y, canvasSize - 1));

    return { x, y };
  }, [canvasSize]);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    const coords = getCoords(e);
    const { x, y } = coords;

    isDrawingRef.current = true;
    lastPosRef.current = { x, y };
    startPosRef.current = { x, y };

    const isRightClick = e.button === 2;
    const drawColor = isRightClick ? '#ffffff' : color;

    if (tool === 'fill') {
      floodFill(x, y, drawColor);
      isDrawingRef.current = false;
      return;
    }

    if (tool === 'picker') {
      const ctx = ctxRef.current;
      if (ctx) {
        const data = ctx.getImageData(x, y, 1, 1).data;
        const picked = '#' + [data[0], data[1], data[2]]
          .map(v => v.toString(16).padStart(2, '0')).join('');
        setColor(picked);
      }
      isDrawingRef.current = false;
      return;
    }

    if (tool === 'pencil' || tool === 'eraser') {
      const drawColor2 = tool === 'eraser' ? '#ffffff' : drawColor;
      const points = getMirroredPoints(x, y);
      points.forEach(p => drawPixel(p.x, p.y, drawColor2));
    }

    previewDataRef.current = ctxRef.current?.getImageData(0, 0, canvasSize, canvasSize);
  }, [tool, color, getCoords, floodFill, drawPixel, getMirroredPoints, canvasSize]);

  const handleMouseMove = useCallback((e) => {
    e.preventDefault();
    const coords = getCoords(e);
    const { x, y } = coords;
    setPos({ x, y });

    if (!isDrawingRef.current) return;

    const isRightClick = e.button === 2;
    const drawColor = isRightClick ? '#ffffff' : color;
    const { x: lx, y: ly } = lastPosRef.current;

    if (tool === 'pencil' || tool === 'eraser') {
      const drawColor2 = tool === 'eraser' ? '#ffffff' : drawColor;
      drawLine(lx, ly, x, y, drawColor2);
      lastPosRef.current = { x, y };
    } else if (tool === 'line' || tool === 'rect' || tool === 'circle') {
      const ctx = ctxRef.current;
      if (!ctx) return;

      if (previewDataRef.current) {
        ctx.putImageData(previewDataRef.current, 0, 0);
      }

      const sx = startPosRef.current.x;
      const sy = startPosRef.current.y;

      if (tool === 'line') {
        drawLine(sx, sy, x, y, drawColor);
      } else if (tool === 'rect') {
        const rx = Math.min(sx, x);
        const ry = Math.min(sy, y);
        const rw = Math.abs(x - sx) + 1;
        const rh = Math.abs(y - sy) + 1;
        ctx.fillStyle = drawColor;
        ctx.fillRect(rx, ry, rw, rh);

        if (mirrorH) {
          const mx = canvasSize - 1 - rx - rw + 1;
          ctx.fillRect(mx, ry, rw, rh);
        }
        if (mirrorV) {
          const my = canvasSize - 1 - ry - rh + 1;
          ctx.fillRect(rx, my, rw, rh);
        }
        if (mirrorH && mirrorV) {
          const mx2 = canvasSize - 1 - rx - rw + 1;
          const my2 = canvasSize - 1 - ry - rh + 1;
          ctx.fillRect(mx2, my2, rw, rh);
        }
        updatePreview();
      } else if (tool === 'circle') {
        const radius = Math.floor(Math.sqrt((x - sx) ** 2 + (y - sy) ** 2));
        const drawCircleAt = (cx, cy) => {
          let cx2 = radius, cy2 = 0, err = 0;
          while (cx2 >= cy2) {
            ctx.fillRect(cx - cx2, cy + cy2, 1, 1);
            ctx.fillRect(cx - cx2, cy - cy2, 1, 1);
            ctx.fillRect(cx - cy2, cy + cx2, 1, 1);
            ctx.fillRect(cx - cy2, cy - cx2, 1, 1);
            cy2++;
            err += 1 + 2 * cy2;
            if (2 * (err - cx2) + 1 > 0) {
              cx2--;
              err += 1 - 2 * cx2;
            }
          }
        };
        drawCircleAt(sx, sy);
        if (mirrorH) drawCircleAt(canvasSize - 1 - sx, sy);
        if (mirrorV) drawCircleAt(sx, canvasSize - 1 - sy);
        if (mirrorH && mirrorV) drawCircleAt(canvasSize - 1 - sx, canvasSize - 1 - sy);
        updatePreview();
      }
    }
  }, [tool, color, getCoords, drawLine, updatePreview, mirrorH, mirrorV, canvasSize]);

  const handleMouseUp = useCallback(() => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    previewDataRef.current = null;

    if (tool === 'line' || tool === 'rect' || tool === 'circle') {
      updatePreview();
      // Save history
    }
  }, [tool, updatePreview]);

  // ===== ZOOM =====
  const handleZoom = useCallback((delta) => {
    const newZoom = Math.max(4, Math.min(32, zoom + delta));
    setZoom(newZoom);
    drawGrid();
  }, [zoom, drawGrid]);

  // ===== TOGGLE THEME =====
  const toggleTheme = () => setIsDark(!isDark);

  // ===== ANIMATION =====
  const addFrame = useCallback(() => {
    const canvas = document.createElement('canvas');
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    ctx.drawImage(canvasRef.current, 0, 0);

    setFrames(prev => [...prev, { canvas, ctx }]);
    setCurrentFrame(frames.length);
  }, [canvasSize, frames.length]);

  const removeFrame = useCallback(() => {
    if (frames.length <= 1) return;
    const newFrames = frames.filter((_, i) => i !== currentFrame);
    setFrames(newFrames);
    setCurrentFrame(Math.min(currentFrame, newFrames.length - 1));
    loadFrame(Math.min(currentFrame, newFrames.length - 1));
  }, [frames, currentFrame]);

  const loadFrame = useCallback((index) => {
    if (index < 0 || index >= frames.length) return;
    const ctx = ctxRef.current;
    if (!ctx) return;

    // Save current frame
    const currentCanvas = frames[currentFrame]?.canvas;
    if (currentCanvas) {
      const tempCtx = currentCanvas.getContext('2d');
      tempCtx.clearRect(0, 0, canvasSize, canvasSize);
      tempCtx.drawImage(canvasRef.current, 0, 0);
    }

    // Load new frame
    const frame = frames[index];
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasSize, canvasSize);
    ctx.drawImage(frame.canvas, 0, 0);
    setCurrentFrame(index);
    updatePreview();
  }, [frames, currentFrame, canvasSize, updatePreview]);

  const playAnimation = useCallback(() => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
  }, [isPlaying]);

  // ===== EXPORT =====
  const exportImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `pixel-art-${canvasSize}x${canvasSize}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setShowExport(false);
  }, [canvasSize]);

  // ===== RESIZE CANVAS =====
  const resizeCanvas = useCallback((size) => {
    const newSize = parseInt(size);
    if (isNaN(newSize) || newSize < 1) return;

    setCanvasSize(newSize);
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;

    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = newSize;
    tempCanvas.height = newSize;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.fillStyle = '#ffffff';
    tempCtx.fillRect(0, 0, newSize, newSize);
    tempCtx.drawImage(canvas, 0, 0, newSize, newSize);

    canvas.width = newSize;
    canvas.height = newSize;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, newSize, newSize);
    ctx.drawImage(tempCanvas, 0, 0);

    // Resize preview
    const previewCanvas = previewCanvasRef.current;
    if (previewCanvas) {
      previewCanvas.width = newSize;
      previewCanvas.height = newSize;
    }

    // Resize grid
    const gridCanvas = gridCanvasRef.current;
    if (gridCanvas) {
      gridCanvas.width = newSize * zoom;
      gridCanvas.height = newSize * zoom;
      drawGrid();
    }

    // Update frames
    setFrames(prev => {
      const newFrames = prev.map(f => {
        const newCanvas = document.createElement('canvas');
        newCanvas.width = newSize;
        newCanvas.height = newSize;
        const newCtx = newCanvas.getContext('2d');
        newCtx.fillStyle = '#ffffff';
        newCtx.fillRect(0, 0, newSize, newSize);
        newCtx.drawImage(f.canvas, 0, 0, newSize, newSize);
        return { canvas: newCanvas, ctx: newCtx };
      });
      return newFrames;
    });

    updatePreview();
  }, [zoom, drawGrid, updatePreview]);

  // ===== KEYBOARD SHORTCUTS =====
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;

      if (key === 'escape') {
        setShowHelp(false);
        setShowExport(false);
        setShowNewDoc(false);
        return;
      }

      if ((e.ctrlKey || e.metaKey) && key === 'z') {
        e.preventDefault();
        // Undo
      } else if ((e.ctrlKey || e.metaKey) && key === 'y') {
        e.preventDefault();
        // Redo
      } else if ((e.ctrlKey || e.metaKey) && key === 'n') {
        e.preventDefault();
        setShowNewDoc(true);
      } else if (key === 'b') setTool('pencil');
      else if (key === 'e') setTool('eraser');
      else if (key === 'l') setTool('line');
      else if (key === 'r') setTool('rect');
      else if (key === 'o') setTool('circle');
      else if (key === 'f') setTool('fill');
      else if (key === 'm') setTool('select');
      else if (key === 'i') setTool('picker');
      else if (key === 'h') setShowHelp(true);
      else if (key === 'j') setMirrorH(prev => !prev);
      else if (key === 'k') setMirrorV(prev => !prev);
      else if (key === ' ') {
        e.preventDefault();
        playAnimation();
      } else if (key === 'arrowleft') {
        e.preventDefault();
        if (currentFrame > 0) loadFrame(currentFrame - 1);
      } else if (key === 'arrowright') {
        e.preventDefault();
        if (currentFrame < frames.length - 1) loadFrame(currentFrame + 1);
      } else if (key === '[') {
        setBrushSize(prev => Math.max(1, prev - 1));
      } else if (key === ']') {
        setBrushSize(prev => Math.min(8, prev + 1));
      } else if (key === 's') setBrushShape('square');
      else if (key === 'd') setBrushShape('circle');
      else if (key === 'g') setBrushShape('diamond');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentFrame, frames, playAnimation, loadFrame]);

  // ===== RENDER =====
  return (
    <div className={`h-screen w-screen overflow-hidden flex flex-col ${isDark ? 'bg-gray-900' : 'bg-[#352879]'}`}>
      {/* ===== HEADER ===== */}
      <header className="h-10 bg-[#6abfc6] border-b-2 border-black flex items-center justify-between px-3 flex-shrink-0 shadow-md z-10">
        <div className="font-['Press_Start_2P'] text-xs text-black uppercase tracking-wide">
          Pixel <span className="text-[8px]">PRO</span>
        </div>
        <div className="flex gap-1 items-center">
          <button onClick={() => setShowHelp(true)} className="w-8 h-8 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all" title="Help (H)">
            <i className="bi bi-question-circle text-sm"></i>
          </button>
          <button onClick={() => setShowExport(true)} className="w-8 h-8 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all" title="Export">
            <i className="bi bi-save text-sm"></i>
          </button>
          <button className="w-8 h-8 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all" title="Import">
            <i className="bi bi-image text-sm"></i>
          </button>
          <button onClick={() => setShowNewDoc(true)} className="w-8 h-8 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all" title="New (Ctrl+N)">
            <i className="bi bi-file-earmark text-sm"></i>
          </button>
          <button onClick={toggleTheme} className="w-8 h-8 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all" title="Theme">
            <i className={`bi ${isDark ? 'bi-moon-stars-fill' : 'bi-sun-fill'} text-sm`}></i>
          </button>
          <button className="w-8 h-8 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] transition-all" title="Fullscreen">
            <i className="bi bi-arrows-fullscreen text-sm"></i>
          </button>
        </div>
      </header>

      {/* ===== WORKSPACE ===== */}
      <div className="flex flex-1 overflow-hidden bg-[#222]">

        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="w-64 bg-[#352879] border-r-2 border-black p-3 overflow-y-auto flex-shrink-0 flex flex-col gap-2">
          {/* Tools */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">Tools</label>
            <div className="grid grid-cols-2 gap-1">
              {['pencil', 'eraser', 'line', 'rect', 'circle', 'fill', 'select', 'picker'].map((t) => (
                <button
                  key={t}
                  onClick={() => setTool(t)}
                  className={`font-['Press_Start_2P'] text-[8px] p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center gap-1 uppercase transition-all ${tool === t ? 'bg-[#6abfc6]' : ''}`}
                >
                  <i className={`bi ${t === 'pencil' ? 'bi-pencil' : t === 'eraser' ? 'bi-eraser' : t === 'line' ? 'bi-slash-lg' : t === 'rect' ? 'bi-square' : t === 'circle' ? 'bi-circle' : t === 'fill' ? 'bi-paint-bucket' : t === 'select' ? 'bi-bounding-box' : 'bi-eyedropper'} text-xs`}></i>
                  <span className="truncate">{t}</span>
                </button>
              ))}
            </div>

            {/* Brush Size */}
            <div className="flex items-center gap-2 mt-1">
              <label className="text-[10px]">Size:</label>
              <input
                type="range"
                min="1"
                max="8"
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value))}
                className="flex-1 h-1.5 bg-black rounded appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-[#6abfc6] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:rounded-sm"
              />
              <span className="font-['Press_Start_2P'] text-[8px] min-w-[25px] text-center">{brushSize}px</span>
            </div>

            {/* Brush Shape */}
            <div className="grid grid-cols-3 gap-1 mt-1">
              {['square', 'circle', 'diamond'].map((shape) => (
                <button
                  key={shape}
                  onClick={() => setBrushShape(shape)}
                  className={`font-['Press_Start_2P'] text-[10px] p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex flex-col items-center justify-center transition-all ${brushShape === shape ? 'bg-[#6abfc6]' : ''}`}
                >
                  <i className={`bi ${shape === 'square' ? 'bi-stop' : shape === 'circle' ? 'bi-circle' : 'bi-diamond-half'} text-sm`}></i>
                  <span className="text-[6px] uppercase">{shape.slice(0, 3)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Layers */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">Layers</label>
            <div className="flex flex-col gap-1 max-h-[100px] overflow-y-auto">
              {layers.map((layer, idx) => (
                <div
                  key={layer.id}
                  className={`flex items-center gap-2 p-1 bg-[#887ecb] border-2 border-black text-xs cursor-pointer ${activeLayer === idx ? 'bg-[#6abfc6] border-white' : ''}`}
                  onClick={() => setActiveLayer(idx)}
                >
                  <input type="checkbox" checked={layer.visible} className="w-3 h-3" readOnly />
                  <span className="flex-1 truncate text-[11px] font-['VT323']">{layer.name}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-1 mt-1">
              {['plus-lg', 'dash-lg', 'arrow-up', 'arrow-down', 'layers'].map((icon, i) => (
                <button key={i} className="p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
                  <i className={`bi bi-${icon}`}></i>
                </button>
              ))}
            </div>
          </div>

          {/* History */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">History</label>
            <div className="flex gap-1">
              <button className="flex-1 p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
                <i className="bi bi-arrow-counterclockwise"></i> Undo
              </button>
              <button className="flex-1 p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
                <i className="bi bi-arrow-clockwise"></i> Redo
              </button>
            </div>
          </div>

          {/* Edit */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">Edit</label>
            <div className="grid grid-cols-2 gap-1">
              {['Copy', 'Cut', 'Paste', 'Rotate', 'Flip H', 'Flip V', 'H Mirror', 'V Mirror', 'Invert', 'Delete'].map((label) => (
                <button key={label} className="text-[8px] p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
                  <i className={`bi ${label === 'Copy' ? 'bi-clipboard' : label === 'Cut' ? 'bi-scissors' : label === 'Paste' ? 'bi-clipboard-check' : label === 'Rotate' ? 'bi-arrow-clockwise' : label === 'Flip H' ? 'bi-arrow-left-right' : label === 'Flip V' ? 'bi-arrow-down-up' : label === 'H Mirror' ? 'bi-symmetry-horizontal' : label === 'V Mirror' ? 'bi-symmetry-vertical' : label === 'Invert' ? 'bi-circle-half' : 'bi-trash'} text-xs`}></i>
                  <span className="truncate">{label}</span>
                </button>
              ))}
            </div>
            <button className="w-full mt-1 p-1 border-2 border-white bg-red-600 text-white shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
              <i className="bi bi-trash-fill"></i> Clear All
            </button>
            <button className="w-full mt-1 p-1 border-2 border-white bg-[#ff6b6b] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center gap-1 text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
              <i className="bi bi-palette"></i> To Palette
            </button>
          </div>

          {/* Canvas Settings */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">Canvas</label>
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm">Size:</span>
              <select
                value={canvasSize}
                onChange={(e) => resizeCanvas(e.target.value)}
                className="bg-white border-2 border-black text-black font-['VT323'] text-sm px-2 py-1 w-[100px]"
              >
                {[8, 16, 24, 32, 48, 64, 96, 128].map(s => (
                  <option key={s} value={s}>{s}x{s}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center justify-between gap-2 mt-1">
              <span className="text-sm">Zoom:</span>
              <select
                value={zoom}
                onChange={(e) => setZoom(parseInt(e.target.value))}
                className="bg-white border-2 border-black text-black font-['VT323'] text-sm px-2 py-1 w-[100px]"
              >
                {[4, 8, 10, 12, 16, 20, 24, 32].map(z => (
                  <option key={z} value={z}>{z}x</option>
                ))}
              </select>
            </div>
            <div className="flex gap-4 mt-1">
              <label className="flex items-center gap-1 text-sm cursor-pointer">
                <input type="checkbox" checked={showGrid} onChange={() => setShowGrid(!showGrid)} className="w-4 h-4" />
                Grid
              </label>
              <label className="flex items-center gap-1 text-sm cursor-pointer">
                <input type="checkbox" checked={showCRT} onChange={() => setShowCRT(!showCRT)} className="w-4 h-4" />
                CRT
              </label>
              <label className="flex items-center gap-1 text-sm cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                Auto-save
              </label>
            </div>
          </div>
        </aside>

        {/* ===== CANVAS ===== */}
        <section className="flex-1 flex items-center justify-center overflow-auto bg-[#222] p-5 relative"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #333 25%, transparent 25%),
              linear-gradient(-45deg, #333 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #333 75%),
              linear-gradient(-45deg, transparent 75%, #333 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        >
          <div className="relative shadow-[0_0_20px_rgba(0,0,0,0.8)] cursor-crosshair inline-block">
            <canvas
              ref={canvasRef}
              width={canvasSize}
              height={canvasSize}
              className="block image-pixelated relative z-10"
              style={{ width: canvasSize * zoom, height: canvasSize * zoom }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onContextMenu={(e) => e.preventDefault()}
              onTouchStart={(e) => { e.preventDefault(); handleMouseDown(e); }}
              onTouchMove={(e) => { e.preventDefault(); handleMouseMove(e); }}
              onTouchEnd={(e) => { e.preventDefault(); handleMouseUp(); }}
            />
            <canvas
              ref={gridCanvasRef}
              className="absolute top-0 left-0 pointer-events-none z-[15]"
              style={{ display: showGrid ? 'block' : 'none' }}
            />
            <div className={`absolute top-0 left-0 w-full h-full pointer-events-none z-20 ${showCRT ? 'block' : 'hidden'}`}
              style={{
                background: 'linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%)',
                backgroundSize: '100% 4px'
              }}
            />
          </div>
        </section>

        {/* ===== RIGHT SIDEBAR ===== */}
        <aside className="w-48 bg-[#352879] border-l-2 border-black p-3 overflow-y-auto flex-shrink-0 flex flex-col gap-2">
          {/* Preview */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)] text-center">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">Preview</label>
            <div className="w-[72px] h-[72px] mx-auto border-2 border-black overflow-hidden"
              style={{
                backgroundImage: `
                  linear-gradient(45deg, #ccc 25%, transparent 25%),
                  linear-gradient(-45deg, #ccc 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #ccc 75%),
                  linear-gradient(-45deg, transparent 75%, #ccc 75%)
                `,
                backgroundSize: '10px 10px'
              }}
            >
              <canvas ref={previewCanvasRef} width={canvasSize} height={canvasSize} className="w-full h-full image-pixelated" />
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="bg-black/70 text-green-400 px-2 py-0.5 rounded font-mono text-xs min-w-[40px] text-center">{pos.x},{pos.y}</span>
              <span className="bg-black/10 px-2 py-0.5 rounded font-mono text-xs">{canvasSize}x{canvasSize}</span>
            </div>
          </div>

          {/* Palette */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)] flex-1 overflow-hidden flex flex-col">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">Palette</label>
            <select className="bg-white border-2 border-black text-black font-['VT323'] text-sm px-2 py-1 w-full mb-1">
              <option>C64</option>
            </select>
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(24px,1fr))] gap-1">
                {Config.PALETTES.Commodore.C64.map((c, i) => (
                  <div
                    key={i}
                    className={`aspect-square border-2 border-black cursor-pointer transition-all hover:scale-110 hover:border-white ${c === color ? 'border-4 border-white shadow-[0_0_0_2px_#000]' : ''}`}
                    style={{ backgroundColor: c }}
                    onClick={() => setColor(c)}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs text-center font-['VT323'] mt-1">16 colors - VIC-II 16 colors</div>
          </div>

          {/* Transparency */}
          <div className="bg-[#6abfc6] border-2 border-black p-2 shadow-[3px_3px_0px_rgba(0,0,0,0.5)]">
            <label className="font-['Press_Start_2P'] text-[10px] block mb-1 border-b-2 border-dashed border-black pb-1 uppercase">Transparency</label>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm">Enable</label>
            </div>
            <label className="text-xs block mt-1">Target:</label>
            <div className="w-full h-7 border-2 border-black cursor-pointer mt-1"
              style={{
                backgroundColor: '#ffffff',
                backgroundImage: `
                  linear-gradient(45deg, #ccc 25%, transparent 25%),
                  linear-gradient(-45deg, #ccc 25%, transparent 25%),
                  linear-gradient(45deg, transparent 75%, #ccc 75%),
                  linear-gradient(-45deg, transparent 75%, #ccc 75%)
                `,
                backgroundSize: '10px 10px'
              }}
            />
          </div>
        </aside>
      </div>

      {/* ===== ANIMATION TIMELINE ===== */}
      <div className="flex items-center gap-2 p-2 bg-[#6abfc6] border-t-2 border-black overflow-x-auto flex-shrink-0 flex-wrap min-h-[50px]">
        <div className="flex gap-1 flex-shrink-0">
          <button onClick={playAnimation} className="p-1.5 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className={`bi ${isPlaying ? 'bi-pause-fill' : 'bi-play-fill'}`}></i>
          </button>
          <button className="p-1.5 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-stop-fill"></i>
          </button>
          <button onClick={addFrame} className="p-1.5 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-plus"></i>
          </button>
          <button onClick={removeFrame} className="p-1.5 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-dash"></i>
          </button>
          <button className="p-1.5 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-sm transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-layers"></i>
          </button>
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          <label className="text-[10px] whitespace-nowrap">FPS:</label>
          <select value={fps} onChange={(e) => setFps(parseInt(e.target.value))} className="bg-white border-2 border-black text-black font-['VT323'] text-[10px] px-1 py-0.5 w-[45px]">
            {[1, 2, 5, 10, 12, 15, 24].map(f => <option key={f} value={f}>{f}</option>)}
          </select>
          <label className="text-[10px] flex items-center gap-1 cursor-pointer">
            <input type="checkbox" checked={onionSkin} onChange={() => setOnionSkin(!onionSkin)} className="w-3.5 h-3.5" />
            Onion
          </label>
          <label className="text-[10px] flex items-center gap-1 cursor-pointer">
            <input type="checkbox" checked={loop} onChange={() => setLoop(!loop)} className="w-3.5 h-3.5" />
            Loop
          </label>
        </div>

        <div className="flex gap-1 flex-1 overflow-x-auto min-h-[40px] items-center py-1">
          {frames.map((_, idx) => (
            <div
              key={idx}
              className={`w-[36px] h-[36px] border-2 border-black cursor-pointer flex-shrink-0 image-pixelated bg-white transition-all ${idx === currentFrame ? 'border-green-400 shadow-[0_0_6px_#00ff00]' : ''} ${onionSkin && Math.abs(idx - currentFrame) === 1 ? 'opacity-40' : ''}`}
              onClick={() => loadFrame(idx)}
            />
          ))}
        </div>

        <div className="flex items-center gap-1 flex-shrink-0">
          <button onClick={() => currentFrame > 0 && loadFrame(currentFrame - 1)} className="p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-chevron-left"></i>
          </button>
          <span className="font-['Press_Start_2P'] text-[10px] min-w-[35px] text-center">{currentFrame + 1}/{frames.length}</span>
          <button onClick={() => currentFrame < frames.length - 1 && loadFrame(currentFrame + 1)} className="p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center justify-center text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="flex gap-1 flex-shrink-0">
          <button className="p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center gap-1 text-[8px] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-file-earmark-arrow-down"></i> Import GIF
          </button>
          <button className="p-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] flex items-center gap-1 text-[8px] transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">
            <i className="bi bi-file-earmark-image"></i> Export GIF
          </button>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <footer className="h-6 bg-[#6abfc6] border-t-2 border-black flex items-center justify-between px-2 text-sm flex-shrink-0">
        <span className="font-['Press_Start_2P'] text-[10px] flex items-center gap-1">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          STATUS: READY
        </span>
        <span className="font-['Press_Start_2P'] text-[8px] bg-white px-2 py-0.5 border-2 border-black rounded flex items-center gap-1">
          <span className="text-[6px] opacity-70">TOOL:</span> {tool.toUpperCase()}
        </span>
        <span className="font-['Press_Start_2P'] text-[8px]"></span>
      </footer>

      {/* ===== HELP MODAL ===== */}
      {showHelp && (
        <div className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-5">
          <div className="bg-[#6abfc6] border-4 border-white shadow-[8px_8px_0px_#000] p-5 max-w-[520px] w-full max-h-[90vh] overflow-y-auto text-center">
            <div className="font-['Press_Start_2P'] text-sm mb-3 uppercase">HELP & COMMANDS</div>
            <div className="text-left text-sm max-h-[55vh] overflow-y-auto">
              {/* Help content - simplified */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div>
                  <div className="font-['Press_Start_2P'] text-[10px] border-b border-black mb-1">Tools</div>
                  <div className="flex justify-between text-xs"><span>Pencil</span><span className="bg-black/15 px-2 rounded font-mono">B</span></div>
                  <div className="flex justify-between text-xs"><span>Eraser</span><span className="bg-black/15 px-2 rounded font-mono">E</span></div>
                  <div className="flex justify-between text-xs"><span>Line</span><span className="bg-black/15 px-2 rounded font-mono">L</span></div>
                  <div className="flex justify-between text-xs"><span>Box</span><span className="bg-black/15 px-2 rounded font-mono">R</span></div>
                  <div className="flex justify-between text-xs"><span>Circle</span><span className="bg-black/15 px-2 rounded font-mono">O</span></div>
                  <div className="flex justify-between text-xs"><span>Fill</span><span className="bg-black/15 px-2 rounded font-mono">F</span></div>
                  <div className="flex justify-between text-xs"><span>Select</span><span className="bg-black/15 px-2 rounded font-mono">M</span></div>
                  <div className="flex justify-between text-xs"><span>Pick</span><span className="bg-black/15 px-2 rounded font-mono">I</span></div>
                </div>
                <div>
                  <div className="font-['Press_Start_2P'] text-[10px] border-b border-black mb-1">Shortcuts</div>
                  <div className="flex justify-between text-xs"><span>Undo</span><span className="bg-black/15 px-2 rounded font-mono">Ctrl+Z</span></div>
                  <div className="flex justify-between text-xs"><span>Redo</span><span className="bg-black/15 px-2 rounded font-mono">Ctrl+Y</span></div>
                  <div className="flex justify-between text-xs"><span>New</span><span className="bg-black/15 px-2 rounded font-mono">Ctrl+N</span></div>
                  <div className="flex justify-between text-xs"><span>Play/Pause</span><span className="bg-black/15 px-2 rounded font-mono">Space</span></div>
                  <div className="flex justify-between text-xs"><span>Prev Frame</span><span className="bg-black/15 px-2 rounded font-mono">←</span></div>
                  <div className="flex justify-between text-xs"><span>Next Frame</span><span className="bg-black/15 px-2 rounded font-mono">→</span></div>
                  <div className="flex justify-between text-xs"><span>Mirror H</span><span className="bg-black/15 px-2 rounded font-mono">J</span></div>
                  <div className="flex justify-between text-xs"><span>Mirror V</span><span className="bg-black/15 px-2 rounded font-mono">K</span></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              <button onClick={() => setShowHelp(false)} className="px-4 py-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== EXPORT MODAL ===== */}
      {showExport && (
        <div className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-5">
          <div className="bg-[#6abfc6] border-4 border-white shadow-[8px_8px_0px_#000] p-5 max-w-[380px] w-full text-center">
            <div className="font-['Press_Start_2P'] text-sm mb-3 uppercase">EXPORT IMAGE</div>
            <select className="bg-white border-2 border-black text-black font-['VT323'] text-sm px-2 py-1 w-full mb-2">
              <option value="image/png">PNG (Transparent)</option>
              <option value="image/jpeg">JPEG (Standard)</option>
              <option value="image/webp">WEBP (Modern)</option>
              <option value="image/bmp">BMP (Bitmap)</option>
              <option value="image/x-icon">ICO (Favicon)</option>
            </select>
            <div className="flex gap-2 justify-center mt-1">
              <button onClick={exportImage} className="px-4 py-1 border-2 border-white bg-[#887ecb] text-black shadow-[2px_2px_0px_#000] text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">SAVE</button>
              <button onClick={() => setShowExport(false)} className="px-4 py-1 border-2 border-white bg-gray-400 text-black shadow-[2px_2px_0px_#000] text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== NEW DOC MODAL ===== */}
      {showNewDoc && (
        <div className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center p-5">
          <div className="bg-[#6abfc6] border-4 border-white shadow-[8px_8px_0px_#000] p-5 max-w-[380px] w-full text-center">
            <div className="font-['Press_Start_2P'] text-sm mb-3 uppercase">NEW DOCUMENT</div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-sm">Size:</span>
              <select onChange={(e) => resizeCanvas(e.target.value)} className="bg-white border-2 border-black text-black font-['VT323'] text-sm px-2 py-1 w-[120px]">
                {[8, 16, 32, 64, 128].map(s => <option key={s} value={s}>{s}x{s}</option>)}
              </select>
            </div>
            <div className="flex gap-2 justify-center mt-1">
              <button onClick={() => { setShowNewDoc(false); }} className="px-4 py-1 border-2 border-white bg-green-600 text-white shadow-[2px_2px_0px_#000] text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">Create</button>
              <button onClick={() => setShowNewDoc(false)} className="px-4 py-1 border-2 border-white bg-gray-400 text-black shadow-[2px_2px_0px_#000] text-xs transition-all hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px]">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PixelStudio;