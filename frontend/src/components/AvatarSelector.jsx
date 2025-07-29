import React, { useState, useRef } from 'react';
import authService from '../services/authService';

const PRESET_AVATARS = [
  { id: 'robot1', name: '机器人-蓝', emoji: '🤖', color: 'from-blue-500 to-purple-600' },
  { id: 'astronaut', name: '宇航员', emoji: '👨‍🚀', color: 'from-purple-500 to-pink-600' },
  { id: 'scientist', name: '科学家', emoji: '👨‍🔬', color: 'from-green-500 to-blue-600' },
  { id: 'robot2', name: '机器人-金', emoji: '🤖', color: 'from-yellow-500 to-orange-600' },
  { id: 'alien', name: '外星人', emoji: '👽', color: 'from-green-400 to-cyan-600' },
  { id: 'cyborg', name: '赛博格', emoji: '🦾', color: 'from-gray-500 to-blue-600' },
  { id: 'rocket', name: '火箭', emoji: '🚀', color: 'from-red-500 to-purple-600' },
  { id: 'satellite', name: '卫星', emoji: '🛰️', color: 'from-indigo-500 to-purple-600' },
  { id: 'planet', name: '星球', emoji: '🪐', color: 'from-purple-400 to-pink-600' },
];

export default function AvatarSelector({ user, onAvatarUpdate, onClose }) {
  const [selectedAvatar, setSelectedAvatar] = useState(user?.avatar || null);
  const [selectedType, setSelectedType] = useState(user?.avatar_type || 'default');
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handlePresetSelect = (avatar) => {
    setSelectedAvatar(avatar.id);
    setSelectedType('preset');
    setPreviewUrl(null);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 检查文件大小 (最大 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert('文件大小不能超过 2MB');
        return;
      }

      // 检查文件类型
      if (!file.type.startsWith('image/')) {
        alert('请选择图片文件');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result;
        setSelectedAvatar(base64Data);
        setSelectedType('upload');
        setPreviewUrl(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (!selectedAvatar) return;

    setUploading(true);
    try {
      const updatedUser = await authService.updateAvatar({
        avatar: selectedAvatar,
        avatar_type: selectedType
      });
      
      onAvatarUpdate(updatedUser);
      onClose();
    } catch (error) {
      alert('头像更新失败: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const getAvatarDisplay = (avatar, type) => {
    if (type === 'upload' && avatar) {
      return (
        <img 
          src={avatar} 
          alt="用户头像" 
          className="w-full h-full object-cover"
        />
      );
    } else if (type === 'preset' && avatar) {
      const presetAvatar = PRESET_AVATARS.find(a => a.id === avatar);
      if (presetAvatar) {
        return (
          <div className={`w-full h-full bg-gradient-to-br ${presetAvatar.color} flex items-center justify-center`}>
            <span className="text-4xl">{presetAvatar.emoji}</span>
          </div>
        );
      }
    }
    
    // 默认显示用户名首字母
    return (
      <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
        <span className="text-4xl text-white font-bold">
          {(user?.full_name || user?.username)?.charAt(0)?.toUpperCase()}
        </span>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* 头部 */}
        <div className="p-6 border-b border-slate-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[--color-primary]/20 rounded-lg">
                <svg className="w-6 h-6 text-[--color-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-slate-100">选择头像</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* 内容 */}
        <div className="p-6 space-y-8 max-h-[calc(90vh-200px)] overflow-y-auto">
          {/* 当前头像预览 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-xl border-4 border-slate-600/50">
              {getAvatarDisplay(selectedAvatar, selectedType)}
            </div>
            <p className="text-slate-400 text-sm mt-3">当前选择的头像</p>
          </div>

          {/* 预设头像 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[--color-secondary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              预设头像
            </h3>
            <div className="grid grid-cols-6 gap-3">
              {PRESET_AVATARS.map((avatar) => (
                <button
                  key={avatar.id}
                  onClick={() => handlePresetSelect(avatar)}
                  className={`relative w-16 h-16 rounded-xl overflow-hidden transition-all duration-200 hover:scale-105 ${
                    selectedAvatar === avatar.id && selectedType === 'preset'
                      ? 'ring-4 ring-[--color-primary] shadow-lg shadow-[--color-primary]/25'
                      : 'hover:ring-2 hover:ring-slate-500'
                  }`}
                  title={avatar.name}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${avatar.color} flex items-center justify-center`}>
                    <span className="text-2xl">{avatar.emoji}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 文件上传 */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-[--color-accent]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              上传自定义头像
            </h3>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-[--color-primary]/50 hover:bg-slate-700/20 transition-colors cursor-pointer"
            >
              <svg className="w-12 h-12 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-slate-300 font-medium mb-2">点击上传图片</p>
              <p className="text-slate-500 text-sm">支持 JPG、PNG 格式，最大 2MB</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
          </div>
        </div>

        {/* 底部操作 */}
        <div className="p-6 border-t border-slate-700/50 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-6 py-3 text-slate-300 hover:text-slate-100 hover:bg-slate-700/50 rounded-xl transition-colors"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            disabled={uploading || !selectedAvatar}
            className="px-6 py-3 bg-gradient-to-r from-[--color-primary] to-[--color-primary]/80 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[--color-primary]/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {uploading ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                保存中...
              </div>
            ) : (
              '保存头像'
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 