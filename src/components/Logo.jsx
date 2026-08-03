const Logo = ({ size = 'default', variant = 'full' }) => {
  const sizes = {
    small: {
      container: 'w-8 h-8',
      viewBox: '0 0 40 40',
    },
    default: {
      container: 'w-10 h-10',
      viewBox: '0 0 40 40',
    },
    large: {
      container: 'w-12 h-12',
      viewBox: '0 0 40 40',
    },
  };

  const currentSize = sizes[size] || sizes.default;

  if (variant === 'icon') {
    // Logo icon saja (huruf G di dalam kotak)
    return (
      <div className={currentSize.container}>
        <svg
          viewBox={currentSize.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background rounded square */}
          <rect
            x="1"
            y="1"
            width="38"
            height="38"
            rx="10"
            className="stroke-white fill-black"
            strokeWidth="1.5"
          />
          {/* Huruf G */}
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white"
            fontFamily="'Pixelify Sans', sans-serif"
            fontSize="22"
            fontWeight="700"
          >
            G
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'minimal') {
    // Huruf G saja tanpa kotak
    return (
      <div className={currentSize.container}>
        <svg
          viewBox={currentSize.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white"
            fontFamily="'Pixelify Sans', sans-serif"
            fontSize="28"
            fontWeight="700"
          >
            G
          </text>
        </svg>
      </div>
    );
  }

  // Variant full: Logo + Teks GWD
  return (
    <div className="flex items-center space-x-3">
      {/* Icon */}
      <div className="w-9 h-9">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <rect
            x="1"
            y="1"
            width="38"
            height="38"
            rx="10"
            className="stroke-white fill-none"
            strokeWidth="1.5"
          />
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-white"
            fontFamily="'Pixelify Sans', sans-serif"
            fontSize="22"
            fontWeight="700"
          >
            G
          </text>
        </svg>
      </div>
      {/* Teks GWD */}
      <div className="flex flex-col leading-tight">
        <span className="text-sm font-bold tracking-wider text-white">GWD</span>
        <span className="text-[10px] text-apple-gray-medium tracking-wider">
          G WEB DEV
        </span>
      </div>
    </div>
  );
};

export default Logo;
