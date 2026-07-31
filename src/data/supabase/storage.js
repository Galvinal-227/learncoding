export const chapter = {
  slug: "storage",
  title: "Storage",
  description: "Mengelola file storage di Supabase untuk upload, download, dan manajemen file.",
  icon: "SiSupabase",
  color: "#3ECF8E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["supabase-introduction", "supabase-auth"],
  tags: ["supabase", "storage", "files", "upload", "images"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Supabase Storage

Supabase Storage menyediakan layanan penyimpanan file dengan S3-compatible API dan RLS untuk keamanan.

## Bucket Management

### Create Bucket
\`\`\`javascript
// Create a bucket
const { data, error } = await supabase
    .storage
    .createBucket('avatars', {
        public: true, // Public or private
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif'],
        fileSizeLimit: 5242880 // 5MB
    });

// Create private bucket
const { data, error } = await supabase
    .storage
    .createBucket('private-files', {
        public: false,
        allowedMimeTypes: ['application/pdf', 'application/msword'],
        fileSizeLimit: 10485760 // 10MB
    });
\`\`\`

### List Buckets
\`\`\`javascript
// List all buckets
const { data, error } = await supabase
    .storage
    .listBuckets();

// Get bucket details
const { data, error } = await supabase
    .storage
    .getBucket('avatars');

// Update bucket
const { data, error } = await supabase
    .storage
    .updateBucket('avatars', {
        public: false,
        fileSizeLimit: 10485760 // 10MB
    });

// Delete bucket
const { data, error } = await supabase
    .storage
    .deleteBucket('avatars');
\`\`\`

## File Upload

### Upload File
\`\`\`javascript
// Upload from File object
const file = event.target.files[0];
const { data, error } = await supabase
    .storage
    .from('avatars')
    .upload('user-123/profile.jpg', file);

// Upload from blob
const blob = new Blob(['Hello World'], { type: 'text/plain' });
const { data, error } = await supabase
    .storage
    .from('documents')
    .upload('file.txt', blob);

// Upload with options
const { data, error } = await supabase
    .storage
    .from('avatars')
    .upload('user-123/profile.jpg', file, {
        cacheControl: '3600',
        upsert: true, // Overwrite if exists
        contentType: 'image/jpeg'
    });
\`\`\`

### Upload with Metadata
\`\`\`javascript
const { data, error } = await supabase
    .storage
    .from('documents')
    .upload('user-123/document.pdf', file, {
        metadata: {
            userId: 'user-123',
            type: 'document',
            version: '1.0'
        }
    });
\`\`\`

## File Download

### Get Public URL
\`\`\`javascript
// Get public URL (for public buckets)
const { data } = supabase
    .storage
    .from('avatars')
    .getPublicUrl('user-123/profile.jpg');

// Full URL
const publicUrl = data.publicUrl;

// Use in img tag
<img src={publicUrl} alt="Profile" />
\`\`\`

### Download File
\`\`\`javascript
// Download file
const { data, error } = await supabase
    .storage
    .from('avatars')
    .download('user-123/profile.jpg');

// Create URL from blob
const url = URL.createObjectURL(data);

// Create download link
const link = document.createElement('a');
link.href = url;
link.download = 'profile.jpg';
link.click();
\`\`\`

### Get Signed URL
\`\`\`javascript
// Get signed URL (for private buckets)
const { data, error } = await supabase
    .storage
    .from('private-files')
    .createSignedUrl('user-123/document.pdf', 60); // expires in 60 seconds

// Signed URL with download
const { data, error } = await supabase
    .storage
    .from('private-files')
    .createSignedUrl('user-123/document.pdf', 60, {
        download: true,
        downloadName: 'document.pdf'
    });
\`\`\`

## File Management

### List Files
\`\`\`javascript
// List files in folder
const { data, error } = await supabase
    .storage
    .from('avatars')
    .list('user-123/');

// List files with pagination
const { data, error } = await supabase
    .storage
    .from('avatars')
    .list('user-123/', {
        limit: 10,
        offset: 0,
        sortBy: { column: 'created_at', order: 'asc' }
    });

// List all files (including subfolders)
const { data, error } = await supabase
    .storage
    .from('avatars')
    .list('', {
        recursive: true
    });
\`\`\`

### Move File
\`\`\`javascript
// Move/rename file
const { data, error } = await supabase
    .storage
    .from('avatars')
    .move(
        'user-123/profile.jpg',
        'user-123/new-profile.jpg'
    );
\`\`\`

### Copy File
\`\`\`javascript
// Copy file
const { data, error } = await supabase
    .storage
    .from('avatars')
    .copy(
        'user-123/profile.jpg',
        'backups/user-123/profile.jpg'
    );
\`\`\`

### Delete File
\`\`\`javascript
// Delete single file
const { data, error } = await supabase
    .storage
    .from('avatars')
    .remove(['user-123/profile.jpg']);

// Delete multiple files
const { data, error } = await supabase
    .storage
    .from('avatars')
    .remove([
        'user-123/profile.jpg',
        'user-123/cover.jpg'
    ]);

// Delete folder (recursive)
const { data, error } = await supabase
    .storage
    .from('avatars')
    .remove(['user-123/']);
\`\`\`

## File Information

\`\`\`javascript
// Get file info
const { data, error } = await supabase
    .storage
    .from('avatars')
    .getFileInfo('user-123/profile.jpg');

// Response includes:
// - id
// - name
// - bucket_id
// - size
// - created_at
// - updated_at
// - metadata
\`\`\`

## Upload with Progress

\`\`\`javascript
// Upload with progress tracking
const uploadWithProgress = async (file, path) => {
    const formData = new FormData();
    formData.append('file', file);
    
    const xhr = new XMLHttpRequest();
    const { data, error } = await new Promise((resolve, reject) => {
        xhr.open('POST', \`\${supabaseUrl}/storage/v1/object/\${bucket}/\${path}\`, true);
        xhr.setRequestHeader('Authorization', \`Bearer \${supabaseKey}\`);
        xhr.upload.onprogress = (event) => {
            const percent = (event.loaded / event.total) * 100;
            console.log(\`Upload progress: \${percent}%\`);
        };
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(xhr.response);
            }
        };
        xhr.send(formData);
    });
    
    return { data, error };
};
\`\`\`

## Storage RLS Policies

\`\`\`sql
-- Users can upload their own avatars
CREATE POLICY "Users can upload their own avatars"
ON storage.objects
FOR INSERT
WITH CHECK (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
);

-- Users can view avatars
CREATE POLICY "Anyone can view avatars"
ON storage.objects
FOR SELECT
USING (bucket_id = 'avatars');

-- Users can update their own avatars
CREATE POLICY "Users can update their own avatars"
ON storage.objects
FOR UPDATE
USING (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
);

-- Users can delete their own avatars
CREATE POLICY "Users can delete their own avatars"
ON storage.objects
FOR DELETE
USING (
    bucket_id = 'avatars' AND
    (storage.foldername(name))[1] = auth.uid()::text
);
\`\`\`

## Best Practices

1. **Use meaningful folder structure** (user-id/type/name)
2. **Set proper file size limits**
3. **Validate file types** before upload
4. **Use metadata** for file information
5. **Implement RLS** for storage
6. **Use signed URLs** for private files
7. **Compress images** before upload
8. **Clean up old files** regularly
9. **Use CDN** for public files
10. **Monitor storage usage**

## Complete Example

\`\`\`javascript
// lib/storage.js - Complete Storage System
import { supabase } from './supabase';

class Storage {
    // ============ BUCKET MANAGEMENT ============
    static async createBucket(name, options = {}) {
        const { data, error } = await supabase
            .storage
            .createBucket(name, {
                public: options.public || false,
                allowedMimeTypes: options.allowedMimeTypes || [],
                fileSizeLimit: options.fileSizeLimit || 5242880
            });
        
        if (error) throw error;
        return data;
    }
    
    static async deleteBucket(name) {
        const { data, error } = await supabase
            .storage
            .deleteBucket(name);
        
        if (error) throw error;
        return data;
    }
    
    // ============ FILE UPLOAD ============
    static async uploadFile(bucket, path, file, options = {}) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .upload(path, file, {
                cacheControl: options.cacheControl || '3600',
                upsert: options.upsert || false,
                contentType: options.contentType || file.type,
                metadata: options.metadata || {}
            });
        
        if (error) throw error;
        return data;
    }
    
    static async uploadAvatar(userId, file) {
        const path = \`\${userId}/avatar.\${file.name.split('.').pop()}\`;
        return this.uploadFile('avatars', path, file, {
            upsert: true,
            metadata: { userId }
        });
    }
    
    // ============ FILE DOWNLOAD ============
    static getPublicUrl(bucket, path) {
        const { data } = supabase
            .storage
            .from(bucket)
            .getPublicUrl(path);
        
        return data.publicUrl;
    }
    
    static async downloadFile(bucket, path) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .download(path);
        
        if (error) throw error;
        return data;
    }
    
    static async getSignedUrl(bucket, path, expiresIn = 60) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .createSignedUrl(path, expiresIn);
        
        if (error) throw error;
        return data.signedUrl;
    }
    
    // ============ FILE MANAGEMENT ============
    static async listFiles(bucket, path = '', options = {}) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .list(path, {
                limit: options.limit || 100,
                offset: options.offset || 0,
                sortBy: options.sortBy || { column: 'created_at', order: 'desc' }
            });
        
        if (error) throw error;
        return data;
    }
    
    static async moveFile(bucket, from, to) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .move(from, to);
        
        if (error) throw error;
        return data;
    }
    
    static async copyFile(bucket, from, to) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .copy(from, to);
        
        if (error) throw error;
        return data;
    }
    
    static async deleteFile(bucket, paths) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .remove(paths);
        
        if (error) throw error;
        return data;
    }
    
    // ============ FILE INFO ============
    static async getFileInfo(bucket, path) {
        const { data, error } = await supabase
            .storage
            .from(bucket)
            .getFileInfo(path);
        
        if (error) throw error;
        return data;
    }
}

export default Storage;`,
      language: "javascript"
    };