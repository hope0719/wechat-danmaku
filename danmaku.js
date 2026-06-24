"use strict";
const COLOR_PRESETS = ['#8455ef', '#2170e4', '#da3437', '#ffb3ad', '#adc6ff', '#ffffff'];
const SPEED_LABELS = ['悠闲', '悠闲', '悠闲', '悠闲', '悠闲', '正常', '正常', '正常', '正常', '正常', '正常', '极速', '极速', '极速', '极速', '极速'];
const SHORTCUTS = ['太棒了！', '前方高能', '继续表演', '哈哈哈哈', '好厉害！', '加油！'];
const PRESET_THEMES = [
    { name: '荧光绿', textColor: '#39ff14', bgColor: '#020402' },
    { name: '应援粉', textColor: '#ff4fd8', bgColor: '#09020a' },
    { name: '电光蓝', textColor: '#38d5ff', bgColor: '#020611' },
    { name: '金色', textColor: '#ffd166', bgColor: '#080604' },
    { name: '纯白', textColor: '#ffffff', bgColor: '#000000' },
];

Component({
    data: {
        text: '即兴现场 · 燃爆全场',
        characters: [],
        color: '#8455ef',
        bgColor: '#1a1025',
        speed: 12,
        speedLabel: '正常',
        fontSize: 500,
        previewFontSize: 500,
        marqueeKey: 0,
        marqueeDuration: '12s',
        marqueeDirectionClass: 'scroll-left',
        direction: 'left',
        directionLabel: '向左滚动',
        isFullscreen: false,
        isPaused: false,
        blink: false,
        led: true,
        neon: true,
        rainbow: false,
        mirror: false,
        inputValue: '',
        showSettings: false,
        shortcuts: SHORTCUTS,
        colorPresets: COLOR_PRESETS,
        presetThemes: PRESET_THEMES,
    },

    lifetimes: {
        attached() {
            this.refreshMarquee();
        },
    },

    methods: {
        onBack() {
            wx.navigateBack();
        },

        onToggleSettings() {
            this.setData({ showSettings: !this.data.showSettings });
        },

        onFocusInput() {
            // 点击输入框时自动展开设置
            if (!this.data.showSettings) {
                this.setData({ showSettings: true });
            }
        },

        onShortcut(e) {
            const val = e.currentTarget.dataset.text;
            this.setData({ text: val }, () => this.refreshMarquee());
        },

        onInput(e) {
            const val = e.detail.value;
            this.setData({
                inputValue: val,
                text: val || '即兴现场 · 燃爆全场',
            }, () => this.refreshMarquee());
        },

        onSend() {
            const val = this.data.inputValue.trim();
            // 有输入则更新文字，否则用当前文字
            const update = val ? { text: val, inputValue: '', isFullscreen: true, isPaused: false, showSettings: false } : { isFullscreen: true, isPaused: false, showSettings: false };
            this.setData(update, () => {
                this.refreshMarquee();
                wx.setNavigationBarColor({
                    frontColor: '#ffffff',
                    backgroundColor: this.data.bgColor,
                });
            });
        },

        onColor(e) {
            const color = e.currentTarget.dataset.color;
            this.setData({ color }, () => this.refreshMarquee());
        },

        onFontSizeChange(e) {
            const fontSize = e.detail.value;
            this.setData({
                fontSize,
                previewFontSize: fontSize,
            }, () => this.refreshMarquee());
        },

        onSpeedChange(e) {
            const speed = e.detail.value;
            const duration = 24 - speed;
            this.setData({
                speed,
                speedLabel: SPEED_LABELS[Math.min(speed - 4, SPEED_LABELS.length - 1)] || '正常',
                marqueeDuration: `${duration}s`,
            }, () => this.refreshMarquee());
        },

        onSwitchDirection() {
            const next = this.data.direction === 'left' ? 'right' : 'left';
            this.setData({
                direction: next,
                directionLabel: next === 'left' ? '向左滚动' : '向右滚动',
                marqueeDirectionClass: next === 'left' ? 'scroll-left' : 'scroll-right',
            }, () => this.refreshMarquee());
        },

        onStageTap() {
            // 双击退出全屏
            const now = Date.now();
            const last = this._lastStageTap || 0;
            if (now - last < 400) {
                // 双击 → 退出全屏
                this._lastStageTap = 0;
                this.setData({ isFullscreen: false }, () => this.refreshMarquee());
            } else {
                this._lastStageTap = now;
            }
        },

        onApplyPreset(e) {
            const index = Number(e.currentTarget.dataset.index);
            const preset = PRESET_THEMES[index];
            if (!preset) return;
            this.setData({
                color: preset.textColor,
                bgColor: preset.bgColor,
            }, () => this.refreshMarquee());
        },

        onRandomStyle() {
            const colors = ['#39ff14', '#ff4fd8', '#38d5ff', '#ffd166', '#ffffff', '#ff3131', '#b026ff', '#8455ef', '#2170e4', '#da3437'];
            const bgs = ['#020402', '#09020a', '#020611', '#080604', '#000000', '#140101', '#070014', '#0d0a1a', '#010a15', '#120402'];
            const index = Math.floor(Math.random() * colors.length);
            const fontSize = 300 + Math.floor(Math.random() * 501);
            const speed = 4 + Math.floor(Math.random() * 13);
            const duration = 24 - speed;
            this.setData({
                color: colors[index],
                bgColor: bgs[index],
                fontSize,
                previewFontSize: fontSize,
                speed,
                speedLabel: SPEED_LABELS[Math.min(speed - 4, SPEED_LABELS.length - 1)] || '正常',
                marqueeDuration: `${duration}s`,
                blink: Math.random() > 0.55,
                led: Math.random() > 0.35,
                neon: Math.random() > 0.25,
                rainbow: Math.random() > 0.55,
            }, () => this.refreshMarquee());
        },

        onToggleBlink() {
            this.setData({ blink: !this.data.blink }, () => this.refreshMarquee());
        },
        onToggleLed() {
            this.setData({ led: !this.data.led }, () => this.refreshMarquee());
        },
        onToggleNeon() {
            this.setData({ neon: !this.data.neon }, () => this.refreshMarquee());
        },
        onToggleRainbow() {
            this.setData({ rainbow: !this.data.rainbow }, () => this.refreshMarquee());
        },
        onToggleMirror() {
            this.setData({ mirror: !this.data.mirror }, () => this.refreshMarquee());
        },
        onTogglePause() {
            this.setData({ isPaused: !this.data.isPaused });
        },

        refreshMarquee() {
            this.setData({
                marqueeKey: this.data.marqueeKey + 1,
                characters: this.data.text.split(''),
            });
        },
    },
});
