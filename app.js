// Enhanced Print Imagination Application
// Advanced functionality with AI assistant, 3D preview, and performance optimization

// Application Data with enhanced product information
const appData = {
    company: {
        name: "print imagination",
        tagline: "طباعة الإبداع بلا حدود",
        description: "منصة طباعة مخصصة متطورة تجمع بين التقنيات ثلاثية الأبعاد والذكاء الاصطناعي لتحويل أفكارك إلى منتجات مطبوعة بجودة استثنائية",
        contact: {
            email: "info@printimagination.com",
            phone: "+966 50 123 4567",
            whatsapp: "+966 50 123 4567",
            address: "شارع الملك فهد، الرياض 12345",
            hours: "الأحد - الخميس: 9:00 - 18:00"
        }
    },
    products: [
        {
            id: "tshirt",
            name: "القمصان المخصصة",
            price: 45,
            originalPrice: 60,
            currency: "ريال",
            description: "قمصان قطنية عالية الجودة مع إمكانية طباعة تصميمك المخصص بتقنية متطورة مقاومة للغسيل",
            icon: "👕",
            category: "ملابس",
            subcategory: "قمصان",
            sizes: ["XS", "S", "M", "L", "XL", "XXL", "3XL"],
            colors: ["أبيض", "أسود", "رمادي", "أزرق كحلي", "أحمر", "أخضر"],
            materials: ["قطن 100%", "قطن مخلوط 80/20", "بوليستر"],
            printAreas: ["الأمام", "الخلف", "الأكمام"],
            minOrder: 1,
            productionTime: "3-5 أيام",
            rating: 4.8,
            reviews: 234,
            bestseller: true
        },
        {
            id: "mug",
            name: "الأكواب المميزة",
            price: 25,
            originalPrice: 35,
            currency: "ريال",
            description: "أكواب سيراميك فاخرة مع طباعة مقاومة للحرارة والغسيل، مثالية للهدايا والاستخدام اليومي",
            icon: "☕",
            category: "منزلية",
            subcategory: "أكواب",
            sizes: ["صغير 250ml", "متوسط 350ml", "كبير 500ml"],
            colors: ["أبيض", "أسود", "أزرق", "أحمر", "وردي"],
            materials: ["سيراميك عالي الجودة", "زجاج", "استانلس ستيل"],
            printAreas: ["حول الكوب", "مقبض", "قاعدة"],
            minOrder: 1,
            productionTime: "2-4 أيام",
            rating: 4.9,
            reviews: 187,
            featured: true
        },
        {
            id: "phone",
            name: "حافظات الهواتف",
            price: 35,
            currency: "ريال",
            description: "حافظات واقية بتصميم مخصص لجميع أنواع الهواتف الذكية مع حماية فائقة وطباعة عالية الوضوح",
            icon: "📱",
            category: "إكسسوارات",
            subcategory: "حافظات",
            sizes: ["iPhone 15", "iPhone 14", "iPhone 13", "Samsung S24", "Samsung S23", "Huawei P60"],
            colors: ["شفاف", "أسود", "أبيض", "ذهبي", "وردي"],
            materials: ["سيليكون مرن", "بلاستيك صلب PC", "TPU عالي الجودة"],
            printAreas: ["الخلف", "الجوانب", "حول الكاميرا"],
            minOrder: 1,
            productionTime: "1-3 أيام",
            rating: 4.7,
            reviews: 156,
            newArrival: true
        },
        {
            id: "card",
            name: "البطاقات الشخصية",
            price: 15,
            currency: "ريال",
            description: "بطاقات شخصية احترافية بطباعة عالية الجودة وتشطيبات متنوعة، مثالية للأعمال والمناسبات",
            icon: "🎴",
            category: "مكتبية",
            subcategory: "بطاقات",
            sizes: ["85x55mm", "90x50mm", "مخصص"],
            colors: ["أبيض", "كريمي", "أسود", "رمادي"],
            materials: ["كرتون 300gsm", "كرتون 350gsm", "ورق مطفي", "ورق لامع"],
            printAreas: ["الوجه الأمامي", "الوجه الخلفي", "الوجهان"],
            minOrder: 100,
            productionTime: "2-4 أيام",
            rating: 4.6,
            reviews: 89
        },
        {
            id: "poster",
            name: "الملصقات الفنية",
            price: 30,
            currency: "ريال",
            description: "ملصقات وبوسترات بأحجام متنوعة وجودة طباعة فائقة، مثالية للديكور والإعلان",
            icon: "🖼️",
            category: "فنية",
            subcategory: "ملصقات",
            sizes: ["A4", "A3", "A2", "A1", "A0", "مخصص"],
            colors: ["ملون", "أبيض وأسود"],
            materials: ["ورق فوتوغرافي", "كانفاس", "فينيل", "ورق مطفي"],
            printAreas: ["كامل السطح"],
            minOrder: 1,
            productionTime: "1-2 أيام",
            rating: 4.8,
            reviews: 67
        },
        {
            id: "bag",
            name: "الحقائب المطبوعة",
            price: 55,
            currency: "ريال",
            description: "حقائب قماشية وبلاستيكية بتصميمات مخصصة للاستخدام اليومي والهدايا التسويقية",
            icon: "🎒",
            category: "حقائب",
            subcategory: "حقائب قماش",
            sizes: ["صغير 20x25cm", "متوسط 30x35cm", "كبير 40x45cm"],
            colors: ["طبيعي", "أبيض", "أسود", "أزرق", "أحمر"],
            materials: ["قماش قطني", "كانفاس", "بولي بروبيلين", "جوت طبيعي"],
            printAreas: ["الأمام", "الخلف", "الجوانب"],
            minOrder: 10,
            productionTime: "3-5 أيام",
            rating: 4.5,
            reviews: 43
        }
    ],
    colorPalettes: {
        basic: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#000000", "#FFFFFF"],
        modern: ["#6366f1", "#8b5cf6", "#f59e0b", "#10b981", "#ef4444", "#06b6d4", "#8b5a2b", "#64748b"],
        natural: ["#8B4513", "#228B22", "#4682B4", "#DEB887", "#D2691E", "#5F9EA0", "#2F4F4F", "#F5DEB3"]
    },
    aiSuggestions: [
        "💡 جرب إضافة ألوان متضادة لجعل التصميم أكثر جاذبية وإبرازاً للعناصر المهمة",
        "🎨 يمكنك تحريك النص لمكان أفضل في التصميم للحصول على توازن بصري أمثل",
        "🌟 هذا التصميم رائع! جرب إضافة المزيد من التفاصيل أو العناصر التكميلية",
        "🔧 تأكد من أن النص واضح ومقروء على هذا اللون للحصول على أفضل نتيجة طباعة",
        "✨ رائع! هذا التصميم جاهز للطباعة بجودة عالية ودقة احترافية",
        "🎯 حاول توسيط العناصر أكثر لتحقيق توازن أفضل في التصميم",
        "🖼️ يمكن تحسين دقة هذه الصورة لضمان جودة طباعة مثالية",
        "🌈 هذه الألوان متناسقة جداً! ستبدو رائعة عند الطباعة",
        "📏 راجع أحجام العناصر للتأكد من ظهورها بوضوح عند الطباعة",
        "⚡ تصميم سريع وفعال! يمكن إضافة لمسة إبداعية أخيرة لإتمامه"
    ]
};

// Application State Management
class AppState {
    constructor() {
        this.currentPage = 'home';
        this.cart = this.loadCartFromStorage();
        this.selectedProduct = null;
        this.designElements = [];
        this.designHistory = [];
        this.currentHistoryIndex = -1;
        this.currentDesignColor = '#000000';
        this.currentFont = 'Cairo';
        this.currentTextSize = 24;
        this.zoomLevel = 1;
        this.isGridVisible = false;
        this.selectedElement = null;
        this.designQuality = 0;
        this.lastModified = null;
        this.isAIActive = true;
        this.theme = 'auto';
    }

    loadCartFromStorage() {
        try {
            return [];
        } catch (e) {
            return [];
        }
    }

    saveCartToStorage() {
        // Simulate saving without using localStorage
        console.log('Cart saved:', this.cart);
    }

    addToHistory(action) {
        // Remove any history after current index
        this.designHistory = this.designHistory.slice(0, this.currentHistoryIndex + 1);
        // Add new action
        this.designHistory.push({
            action,
            elements: JSON.parse(JSON.stringify(this.designElements)),
            timestamp: Date.now()
        });
        this.currentHistoryIndex++;
        
        // Limit history size
        if (this.designHistory.length > 50) {
            this.designHistory.shift();
            this.currentHistoryIndex--;
        }
        
        this.updateHistoryButtons();
    }

    undo() {
        if (this.currentHistoryIndex > 0) {
            this.currentHistoryIndex--;
            this.designElements = JSON.parse(JSON.stringify(this.designHistory[this.currentHistoryIndex].elements));
            this.renderDesignElements();
            this.updateHistoryButtons();
            this.updateDesignStats();
            this.updateDesignQuality();
        }
    }

    redo() {
        if (this.currentHistoryIndex < this.designHistory.length - 1) {
            this.currentHistoryIndex++;
            this.designElements = JSON.parse(JSON.stringify(this.designHistory[this.currentHistoryIndex].elements));
            this.renderDesignElements();
            this.updateHistoryButtons();
            this.updateDesignStats();
            this.updateDesignQuality();
        }
    }

    updateHistoryButtons() {
        const undoBtn = document.getElementById('undoBtn');
        const redoBtn = document.getElementById('redoBtn');
        
        if (undoBtn) {
            undoBtn.disabled = this.currentHistoryIndex <= 0;
            undoBtn.style.opacity = undoBtn.disabled ? '0.5' : '1';
        }
        
        if (redoBtn) {
            redoBtn.disabled = this.currentHistoryIndex >= this.designHistory.length - 1;
            redoBtn.style.opacity = redoBtn.disabled ? '0.5' : '1';
        }
    }
}

// Global state instance
const appState = new AppState();

// Performance optimization utilities
const PerformanceManager = {
    observers: new Map(),
    
    observeIntersection(elements, callback, options = {}) {
        const observer = new IntersectionObserver(callback, {
            threshold: 0.1,
            rootMargin: '50px',
            ...options
        });
        
        elements.forEach(element => observer.observe(element));
        return observer;
    },
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    preloadImages(urls) {
        urls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    },
    
    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
};

// Enhanced Loading System
class LoadingManager {
    constructor() {
        this.loadingSteps = [
            { text: "جاري تحميل الموارد...", duration: 500 },
            { text: "تهيئة أداة التصميم...", duration: 800 },
            { text: "تحميل المنتجات...", duration: 600 },
            { text: "تنشيط الذكاء الاصطناعي...", duration: 700 },
            { text: "إعداد المعاينة ثلاثية الأبعاد...", duration: 500 },
            { text: "تحسين الأداء...", duration: 400 },
            { text: "تم التحميل بنجاح!", duration: 300 }
        ];
        this.currentStep = 0;
    }

    async start() {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        for (let i = 0; i < this.loadingSteps.length; i++) {
            const step = this.loadingSteps[i];
            const progress = ((i + 1) / this.loadingSteps.length) * 100;
            
            // Update progress text
            if (progressText) {
                progressText.textContent = step.text;
            }
            
            // Animate progress bar
            if (progressFill) {
                progressFill.style.width = progress + '%';
            }
            
            // Wait for step duration
            await new Promise(resolve => setTimeout(resolve, step.duration));
        }
        
        // Complete loading
        setTimeout(() => {
            this.complete();
        }, 500);
    }

    complete() {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        if (loadingScreen && mainContent) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                this.initializeAnimations();
            }, 800);
        }
    }

    initializeAnimations() {
        // Animate hero statistics
        this.animateCounters();
        
        // Initialize scroll animations
        this.setupScrollAnimations();
        
        // Start floating animations
        this.initializeFloatingElements();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-target]');
        counters.forEach(counter => {
            const target = parseInt(counter.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 16);
        });
    }

    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.feature-card, .product-card, .performance-card');
        
        PerformanceManager.observeIntersection(animatedElements, (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                    entry.target.style.animationDelay = Math.random() * 0.3 + 's';
                }
            });
        });
    }

    initializeFloatingElements() {
        const floatingItems = document.querySelectorAll('.floating-item');
        floatingItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const productId = item.dataset.product;
                if (productId) {
                    const product = appData.products.find(p => p.id === productId);
                    if (product) {
                        showProductQuickPreview(product);
                    }
                }
            });
        });
    }
}

// AI Assistant System
class AIAssistant {
    constructor() {
        this.isAnalyzing = false;
        this.lastAnalysis = null;
        this.suggestionHistory = [];
    }

    async analyzeDesign() {
        if (this.isAnalyzing || !appState.selectedProduct || appState.designElements.length === 0) {
            return;
        }

        this.isAnalyzing = true;
        this.showAnalyzingState();

        // Simulate AI analysis delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const analysis = this.performDesignAnalysis();
        this.lastAnalysis = analysis;
        
        this.displayAnalysisResults(analysis);
        this.generateSuggestions(analysis);
        
        this.isAnalyzing = false;
    }

    performDesignAnalysis() {
        const elements = appState.designElements;
        const analysis = {
            colorContrast: this.analyzeColorContrast(),
            layoutBalance: this.analyzeLayoutBalance(),
            textReadability: this.analyzeTextReadability(),
            imageQuality: this.analyzeImageQuality(),
            printReadiness: this.analyzePrintReadiness(),
            overallScore: 0
        };

        // Calculate overall score
        const scores = Object.values(analysis).filter(score => typeof score === 'number');
        analysis.overallScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);

        return analysis;
    }

    analyzeColorContrast() {
        const textElements = appState.designElements.filter(el => el.type === 'text');
        if (textElements.length === 0) return 85;

        // Simulate color contrast analysis
        const hasGoodContrast = textElements.every(el => {
            return this.calculateContrastRatio(el.color, '#ffffff') > 4.5;
        });

        return hasGoodContrast ? 95 : 70;
    }

    analyzeLayoutBalance() {
        if (appState.designElements.length === 0) return 50;
        
        // Calculate center of mass
        const centerX = appState.designElements.reduce((sum, el) => sum + el.x, 0) / appState.designElements.length;
        const centerY = appState.designElements.reduce((sum, el) => sum + el.y, 0) / appState.designElements.length;
        
        // Check if elements are reasonably distributed
        const isWellDistributed = Math.abs(centerX - 250) < 100 && Math.abs(centerY - 300) < 150;
        
        return isWellDistributed ? 90 : 65;
    }

    analyzeTextReadability() {
        const textElements = appState.designElements.filter(el => el.type === 'text');
        if (textElements.length === 0) return 80;

        const hasAppropriateSize = textElements.every(el => el.fontSize >= 14);
        return hasAppropriateSize ? 92 : 60;
    }

    analyzeImageQuality() {
        const imageElements = appState.designElements.filter(el => el.type === 'image');
        if (imageElements.length === 0) return 85;

        // Simulate image quality check
        return Math.random() > 0.3 ? 88 : 65;
    }

    analyzePrintReadiness() {
        const score = (this.analyzeColorContrast() + this.analyzeLayoutBalance() + this.analyzeTextReadability()) / 3;
        return Math.round(score);
    }

    calculateContrastRatio(color1, color2) {
        // Simplified contrast ratio calculation
        return Math.random() * 10 + 3; // Mock calculation
    }

    showAnalyzingState() {
        const aiChat = document.getElementById('aiChat');
        if (aiChat) {
            const analyzingMessage = document.createElement('div');
            analyzingMessage.className = 'ai-message analyzing';
            analyzingMessage.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div class="ai-thinking"></div>
                    <span>جاري تحليل التصميم...</span>
                </div>
            `;
            aiChat.appendChild(analyzingMessage);
            aiChat.scrollTop = aiChat.scrollHeight;
        }
    }

    displayAnalysisResults(analysis) {
        // Update quality circle
        appState.designQuality = analysis.overallScore;
        this.updateQualityCircle(analysis.overallScore);

        // Remove analyzing message
        const analyzingMessage = document.querySelector('.ai-message.analyzing');
        if (analyzingMessage) {
            analyzingMessage.remove();
        }

        // Add analysis result message
        const aiChat = document.getElementById('aiChat');
        if (aiChat) {
            const resultMessage = document.createElement('div');
            resultMessage.className = 'ai-message';
            resultMessage.innerHTML = `
                📊 تحليل التصميم مكتمل!<br>
                <strong>النتيجة الإجمالية: ${analysis.overallScore}%</strong><br>
                <small>• تباين الألوان: ${analysis.colorContrast}%<br>
                • توازن التصميم: ${analysis.layoutBalance}%<br>
                • وضوح النص: ${analysis.textReadability}%</small>
            `;
            aiChat.appendChild(resultMessage);
            aiChat.scrollTop = aiChat.scrollHeight;
        }
    }

    updateQualityCircle(score) {
        const progressCircle = document.querySelector('.progress-bar-circle');
        const progressText = document.querySelector('.progress-text');
        
        if (progressCircle && progressText) {
            const circumference = 2 * Math.PI * 15; // radius = 15
            const offset = circumference - (score / 100) * circumference;
            
            progressCircle.style.strokeDashoffset = offset;
            progressText.textContent = score + '%';
            
            // Update color based on score
            if (score >= 80) {
                progressCircle.style.stroke = 'var(--color-success)';
            } else if (score >= 60) {
                progressCircle.style.stroke = 'var(--color-warning)';
            } else {
                progressCircle.style.stroke = 'var(--color-error)';
            }
        }
    }

    generateSuggestions(analysis) {
        const suggestions = [];
        
        if (analysis.colorContrast < 80) {
            suggestions.push("🎨 حاول استخدام ألوان متباينة أكثر لتحسين وضوح النص");
        }
        
        if (analysis.layoutBalance < 75) {
            suggestions.push("⚖️ أعد توزيع العناصر لتحقيق توازن أفضل في التصميم");
        }
        
        if (analysis.textReadability < 80) {
            suggestions.push("📝 زد حجم النص لضمان وضوح القراءة عند الطباعة");
        }
        
        if (appState.designElements.length < 2) {
            suggestions.push("✨ أضف المزيد من العناصر لإثراء التصميم");
        }
        
        if (suggestions.length === 0) {
            suggestions.push(appData.aiSuggestions[Math.floor(Math.random() * appData.aiSuggestions.length)]);
        }

        this.displaySuggestions(suggestions);
    }

    displaySuggestions(suggestions) {
        const aiSuggestions = document.getElementById('aiSuggestions');
        if (!aiSuggestions) return;

        aiSuggestions.innerHTML = '';
        
        suggestions.forEach((suggestion, index) => {
            setTimeout(() => {
                const suggestionElement = document.createElement('div');
                suggestionElement.className = 'suggestion-item';
                suggestionElement.textContent = suggestion;
                
                suggestionElement.addEventListener('click', () => {
                    this.applySuggestion(suggestion);
                });
                
                aiSuggestions.appendChild(suggestionElement);
            }, index * 300);
        });
    }

    applySuggestion(suggestion) {
        // Simulate applying suggestion
        if (suggestion.includes('ألوان متباينة')) {
            this.improveColorContrast();
        } else if (suggestion.includes('توزيع العناصر')) {
            this.improveLayout();
        } else if (suggestion.includes('حجم النص')) {
            this.improveTextSize();
        }
        
        this.showAppliedMessage();
    }

    improveColorContrast() {
        appState.designElements.forEach(element => {
            if (element.type === 'text' && element.color === '#ffffff') {
                element.color = '#000000';
            } else if (element.type === 'text' && element.color === '#000000') {
                element.color = '#ffffff';
            }
        });
        appState.renderDesignElements();
    }

    improveLayout() {
        appState.designElements.forEach((element, index) => {
            element.x = 100 + (index % 3) * 120;
            element.y = 150 + Math.floor(index / 3) * 100;
        });
        appState.renderDesignElements();
    }

    improveTextSize() {
        appState.designElements.forEach(element => {
            if (element.type === 'text' && element.fontSize < 16) {
                element.fontSize = 18;
            }
        });
        appState.renderDesignElements();
    }

    showAppliedMessage() {
        const aiChat = document.getElementById('aiChat');
        if (aiChat) {
            const message = document.createElement('div');
            message.className = 'ai-message';
            message.textContent = '✅ تم تطبيق الاقتراح بنجاح!';
            aiChat.appendChild(message);
            aiChat.scrollTop = aiChat.scrollHeight;
        }
        
        // Re-analyze after applying suggestion
        setTimeout(() => {
            this.analyzeDesign();
        }, 1000);
    }

    sendWelcomeMessage() {
        const aiChat = document.getElementById('aiChat');
        if (aiChat) {
            const welcomeMessage = document.createElement('div');
            welcomeMessage.className = 'ai-message';
            welcomeMessage.textContent = 'مرحباً! أنا مساعدك الذكي. اختر منتجاً وابدأ التصميم لأقدم لك اقتراحات مفيدة! 🚀';
            aiChat.appendChild(welcomeMessage);
        }
    }
}

// Global AI assistant instance
const aiAssistant = new AIAssistant();

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing enhanced app...');
    initializeApplication();
});

// Enhanced Application Initialization
async function initializeApplication() {
    const loadingManager = new LoadingManager();
    
    // Start loading sequence
    await loadingManager.start();
    
    // Initialize all components after loading
    setTimeout(() => {
        setupEventListeners();
        loadProducts();
        setupDesignTool();
        initializePerformanceOptimizations();
        setupThemeToggle();
        createQualityChart();
        
        // Initialize AI assistant
        aiAssistant.sendWelcomeMessage();
        
        console.log('Enhanced application initialized successfully');
    }, 1000);
}

// Enhanced Event Listeners Setup
function setupEventListeners() {
    console.log('Setting up enhanced event listeners...');
    
    // Navigation with smooth transitions
    setupNavigationListeners();
    
    // Shopping cart functionality
    setupCartListeners();
    
    // Product interactions
    setupProductListeners();
    
    // Design tool interactions
    setupDesignToolListeners();
    
    // Modal interactions
    setupModalListeners();
    
    // Search and filters
    setupSearchAndFilters();
    
    // Performance optimized scroll listeners
    setupScrollListeners();
    
    // Keyboard shortcuts
    setupKeyboardShortcuts();
    
    console.log('Enhanced event listeners setup complete');
}

function setupNavigationListeners() {
    const navLinks = document.querySelectorAll('.nav-link[data-page], [data-page]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            if (targetPage) {
                navigateToPage(targetPage);
            }
        });
    });
}

function setupCartListeners() {
    const cartBtn = document.getElementById('cartBtn');
    const cartOverlay = document.getElementById('cartOverlay');
    const closeCart = document.getElementById('closeCart');

    if (cartBtn) {
        cartBtn.addEventListener('click', showCart);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', hideCart);
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', hideCart);
    }
}

function setupProductListeners() {
    // Product search
    const productSearch = document.getElementById('productSearch');
    if (productSearch) {
        productSearch.addEventListener('input', PerformanceManager.debounce(filterAndSearchProducts, 300));
    }
    
    // Product filters
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (categoryFilter) categoryFilter.addEventListener('change', filterAndSearchProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterAndSearchProducts);
    if (sortFilter) sortFilter.addEventListener('change', filterAndSearchProducts);
}

function setupDesignToolListeners() {
    // Product selection
    setupProductSelector();
    
    // Color palettes
    setupColorPalettes();
    
    // Text tools
    setupTextTools();
    
    // Shape tools
    setupShapeTools();
    
    // Image upload
    setupImageUpload();
    
    // Canvas tools
    setupCanvasTools();
    
    // Layer management
    setupLayerManagement();
    
    // Design actions
    setupDesignActions();
}

function setupModalListeners() {
    // Demo modal
    const demoBtn = document.querySelector('.btn-demo');
    const closeDemoModal = document.getElementById('closeDemoModal');
    
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            const demoModal = document.getElementById('demoModal');
            if (demoModal) {
                demoModal.classList.remove('hidden');
            }
        });
    }
    
    if (closeDemoModal) {
        closeDemoModal.addEventListener('click', () => {
            const demoModal = document.getElementById('demoModal');
            if (demoModal) {
                demoModal.classList.add('hidden');
            }
        });
    }
}

function setupSearchAndFilters() {
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        // Add search icon animation
        searchInput.addEventListener('focus', () => {
            const searchIcon = document.querySelector('.search-icon');
            if (searchIcon) {
                searchIcon.style.color = 'var(--color-primary)';
                searchIcon.style.transform = 'translateY(-50%) scale(1.1)';
            }
        });
        
        searchInput.addEventListener('blur', () => {
            const searchIcon = document.querySelector('.search-icon');
            if (searchIcon) {
                searchIcon.style.color = 'var(--color-text-secondary)';
                searchIcon.style.transform = 'translateY(-50%) scale(1)';
            }
        });
    }
}

function setupScrollListeners() {
    // Throttled scroll listener for performance
    const throttledScrollHandler = PerformanceManager.throttle(() => {
        updateHeaderOnScroll();
        updateScrollProgress();
    }, 16);
    
    window.addEventListener('scroll', throttledScrollHandler);
}

function updateHeaderOnScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        header.style.background = 'rgba(var(--color-surface-rgb, 255, 255, 255), 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(var(--color-surface-rgb, 255, 255, 255), 0.95)';
        header.style.boxShadow = 'none';
    }
}

function updateScrollProgress() {
    const scrolled = window.scrollY;
    const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxHeight) * 100;
    
    // Update any scroll progress indicators
    const progressIndicator = document.querySelector('.scroll-progress');
    if (progressIndicator) {
        progressIndicator.style.width = progress + '%';
    }
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Only handle shortcuts when on design page
        if (appState.currentPage !== 'design') return;
        
        if (e.ctrlKey || e.metaKey) {
            switch (e.key) {
                case 'z':
                    e.preventDefault();
                    if (e.shiftKey) {
                        appState.redo();
                    } else {
                        appState.undo();
                    }
                    break;
                case 's':
                    e.preventDefault();
                    saveDesign();
                    break;
                case 'c':
                    if (appState.selectedElement) {
                        e.preventDefault();
                        duplicateElement(appState.selectedElement);
                    }
                    break;
            }
        }
        
        // Delete key
        if (e.key === 'Delete' && appState.selectedElement) {
            deleteSelectedElement();
        }
    });
}

// Enhanced Navigation System
function navigateToPage(pageId) {
    console.log('Navigating to page:', pageId);
    
    // Add loading transition
    const currentPageElement = document.querySelector('.page.active');
    if (currentPageElement) {
        currentPageElement.style.transform = 'translateX(-20px)';
        currentPageElement.style.opacity = '0.8';
    }
    
    setTimeout(() => {
        // Update active nav link
        const navLinks = document.querySelectorAll('.nav-link[data-page]');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });

        // Show target page
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.remove('active');
        });

        const targetPage = document.getElementById(pageId + 'Page');
        if (targetPage) {
            targetPage.classList.add('active');
            appState.currentPage = pageId;

            // Load page specific content
            loadPageContent(pageId);
        }

        // Scroll to top with smooth animation
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 150);
}

function loadPageContent(pageId) {
    switch (pageId) {
        case 'products':
            loadAllProducts();
            break;
        case 'design':
            initializeDesignTool();
            break;
        case 'home':
            // Restart hero animations if needed
            restartHeroAnimations();
            break;
    }
}

function restartHeroAnimations() {
    const animatedElements = document.querySelectorAll('.animate-text');
    animatedElements.forEach((element, index) => {
        element.style.animation = 'none';
        setTimeout(() => {
            element.style.animation = `fadeInUp 1s ease forwards`;
            element.style.animationDelay = (index * 0.2) + 's';
        }, 50);
    });
}

// Enhanced Products Loading and Management
function loadProducts() {
    loadQuickProducts();
}

function loadQuickProducts() {
    const container = document.getElementById('quickProductsGrid');
    if (!container) return;

    container.innerHTML = '';
    
    // Show featured and best-selling products first
    const featuredProducts = appData.products
        .filter(product => product.bestseller || product.featured)
        .slice(0, 4);
    
    // If not enough featured products, fill with others
    if (featuredProducts.length < 4) {
        const remainingCount = 4 - featuredProducts.length;
        const otherProducts = appData.products
            .filter(product => !product.bestseller && !product.featured)
            .slice(0, remainingCount);
        featuredProducts.push(...otherProducts);
    }
    
    featuredProducts.forEach((product, index) => {
        setTimeout(() => {
            const productCard = createEnhancedProductCard(product);
            container.appendChild(productCard);
        }, index * 100);
    });
}

function loadAllProducts() {
    const container = document.getElementById('allProductsGrid');
    if (!container) return;

    container.innerHTML = '';
    
    appData.products.forEach((product, index) => {
        setTimeout(() => {
            const productCard = createEnhancedProductCard(product, true);
            container.appendChild(productCard);
        }, index * 50);
    });
}

function createEnhancedProductCard(product, showDetails = false) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-category', product.category);
    card.setAttribute('data-price', product.price);
    card.setAttribute('data-name', product.name.toLowerCase());

    const badges = [];
    if (product.bestseller) badges.push('<span class="product-badge bestseller">الأكثر مبيعاً</span>');
    if (product.featured) badges.push('<span class="product-badge featured">مميز</span>');
    if (product.newArrival) badges.push('<span class="product-badge new">جديد</span>');

    const originalPriceHtml = product.originalPrice 
        ? `<span class="original-price">${product.originalPrice} ${product.currency}</span>` 
        : '';

    card.innerHTML = `
        <div class="product-badges">${badges.join('')}</div>
        <div class="product-icon">${product.icon}</div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">
            ${originalPriceHtml}
            <span class="current-price">${product.price} ${product.currency}</span>
        </div>
        ${showDetails ? `
            <div class="product-details">
                <div class="detail-item">
                    <strong>الفئة:</strong> ${product.category}
                </div>
                <div class="detail-item">
                    <strong>وقت الإنتاج:</strong> ${product.productionTime}
                </div>
                <div class="product-rating">
                    <span class="rating-stars">${'⭐'.repeat(Math.floor(product.rating))}</span>
                    <span class="rating-score">${product.rating}</span>
                    <span class="rating-reviews">(${product.reviews} تقييم)</span>
                </div>
            </div>
        ` : ''}
        <div class="product-actions">
            <button class="btn btn--primary customize-btn" data-product-id="${product.id}">
                <span>تخصيص الآن</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" stroke-width="2"/>
                </svg>
            </button>
            <button class="btn btn--outline quick-add-btn" data-product-id="${product.id}">
                إضافة سريعة
            </button>
        </div>
    `;

    // Add enhanced interactions
    const customizeBtn = card.querySelector('.customize-btn');
    const quickAddBtn = card.querySelector('.quick-add-btn');
    
    customizeBtn.addEventListener('click', () => {
        selectProductForDesign(product);
    });
    
    quickAddBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        quickAddToCart(product);
    });

    // Add hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px) rotateX(2deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
    });

    return card;
}

function quickAddToCart(product) {
    const cartItem = {
        id: Date.now(),
        product: product,
        design: [],
        price: product.price,
        isQuickAdd: true
    };

    addToCart(cartItem);
    
    // Show success feedback
    showToast(`تم إضافة ${product.name} للسلة بنجاح!`, 'success');
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <span class="toast-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span class="toast-message">${message}</span>
        </div>
    `;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-surface);
        color: var(--color-text);
        padding: 12px 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        border-left: 4px solid ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-error)' : 'var(--color-primary)'};
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Enhanced Product Filtering and Search
function filterAndSearchProducts() {
    const searchQuery = document.getElementById('productSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const priceFilter = document.getElementById('priceFilter')?.value || '';
    const sortFilter = document.getElementById('sortFilter')?.value || '';
    
    const productCards = document.querySelectorAll('#allProductsGrid .product-card');
    let visibleProducts = [];

    productCards.forEach(card => {
        const productName = card.getAttribute('data-name') || '';
        const productCategory = card.getAttribute('data-category') || '';
        const productPrice = parseInt(card.getAttribute('data-price')) || 0;
        
        let isVisible = true;

        // Search filter
        if (searchQuery && !productName.includes(searchQuery)) {
            isVisible = false;
        }

        // Category filter
        if (categoryFilter && productCategory !== categoryFilter) {
            isVisible = false;
        }

        // Price filter
        if (priceFilter) {
            const [min, max] = priceFilter.split('-').map(Number);
            if (max) {
                if (productPrice < min || productPrice > max) {
                    isVisible = false;
                }
            } else {
                if (productPrice <= min) {
                    isVisible = false;
                }
            }
        }

        if (isVisible) {
            visibleProducts.push({ card, price: productPrice, name: productName });
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    // Sort visible products
    if (sortFilter && visibleProducts.length > 0) {
        sortProducts(visibleProducts, sortFilter);
    }

    // Update results count
    updateSearchResults(visibleProducts.length);
}

function sortProducts(products, sortType) {
    products.sort((a, b) => {
        switch (sortType) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'name':
                return a.name.localeCompare(b.name, 'ar');
            default:
                return 0;
        }
    });

    // Reorder DOM elements
    const container = document.getElementById('allProductsGrid');
    products.forEach(({ card }) => {
        container.appendChild(card);
    });
}

function updateSearchResults(count) {
    let resultsIndicator = document.querySelector('.search-results');
    if (!resultsIndicator) {
        resultsIndicator = document.createElement('div');
        resultsIndicator.className = 'search-results';
        resultsIndicator.style.cssText = `
            text-align: center;
            margin: 16px 0;
            padding: 8px;
            color: var(--color-text-secondary);
            font-size: 14px;
        `;
        const container = document.getElementById('allProductsGrid');
        container.parentNode.insertBefore(resultsIndicator, container);
    }
    
    resultsIndicator.textContent = `تم العثور على ${count} منتج`;
}

// Design Tool Enhanced Functions
function setupDesignTool() {
    console.log('Setting up enhanced design tool...');
    setupProductSelector();
    setupColorPalettes();
    setupTextTools();
    setupShapeTools();
    setupImageUpload();
    setupCanvasTools();
    setupLayerManagement();
    setupDesignActions();
}

function setupProductSelector() {
    const productSelector = document.getElementById('productSelector');
    if (!productSelector) return;

    productSelector.innerHTML = '';
    
    appData.products.forEach(product => {
        const option = document.createElement('div');
        option.className = 'product-option';
        option.setAttribute('data-product-id', product.id);
        option.innerHTML = `
            <span class="product-emoji">${product.icon}</span>
            <div class="product-info">
                <span class="product-name">${product.name}</span>
                <span class="product-price">${product.price} ${product.currency}</span>
            </div>
        `;
        
        option.addEventListener('click', () => {
            selectProductForDesign(product);
        });
        
        productSelector.appendChild(option);
    });
}

function setupColorPalettes() {
    const colorPalette = document.getElementById('colorPalette');
    const paletteTabs = document.querySelectorAll('.palette-tab');
    
    if (!colorPalette) return;

    // Load default palette
    loadColorPalette('basic');
    
    // Setup palette tabs
    paletteTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            paletteTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            loadColorPalette(tab.dataset.palette);
        });
    });
}

function loadColorPalette(paletteType) {
    const colorPalette = document.getElementById('colorPalette');
    if (!colorPalette) return;

    const colors = appData.colorPalettes[paletteType] || appData.colorPalettes.basic;
    
    colorPalette.innerHTML = '';
    colors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.className = 'color-option';
        colorOption.style.backgroundColor = color;
        colorOption.setAttribute('data-color', color);
        
        colorOption.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('selected'));
            colorOption.classList.add('selected');
            appState.currentDesignColor = color;
        });
        
        colorPalette.appendChild(colorOption);
    });
}

function setupTextTools() {
    const addTextBtn = document.querySelector('.btn-add-text');
    const textInput = document.getElementById('textInput');
    const fontSelect = document.getElementById('fontSelect');
    const textSize = document.getElementById('textSize');
    
    if (addTextBtn && textInput) {
        addTextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const text = textInput.value.trim();
            if (text) {
                addTextElement(text);
                textInput.value = '';
            } else {
                showToast('يرجى كتابة نص أولاً', 'error');
            }
        });

        textInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const text = textInput.value.trim();
                if (text) {
                    addTextElement(text);
                    textInput.value = '';
                }
            }
        });
    }
    
    if (fontSelect) {
        fontSelect.addEventListener('change', (e) => {
            appState.currentFont = e.target.value;
            updateSelectedElementFont();
        });
    }
    
    if (textSize) {
        textSize.addEventListener('input', (e) => {
            appState.currentTextSize = parseInt(e.target.value);
            updateSelectedElementSize();
        });
    }
}

function setupShapeTools() {
    const shapeOptions = document.querySelectorAll('.shape-option');
    
    shapeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const shapeType = option.dataset.shape;
            addShapeElement(shapeType);
            
            // Visual feedback
            shapeOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            
            setTimeout(() => {
                option.classList.remove('selected');
            }, 500);
        });
    });
}

function setupImageUpload() {
    const uploadBtn = document.getElementById('uploadBtn');
    const imageUpload = document.getElementById('imageUpload');
    
    if (uploadBtn && imageUpload) {
        uploadBtn.addEventListener('click', () => {
            imageUpload.click();
        });
        
        imageUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file && file.type.startsWith('image/')) {
                handleImageUpload(file);
            } else {
                showToast('يرجى اختيار ملف صورة صحيح', 'error');
            }
        });
    }
}

function handleImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        addImageElement(e.target.result);
        showToast('تم تحميل الصورة بنجاح!', 'success');
    };
    reader.readAsDataURL(file);
}

function setupCanvasTools() {
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const toggleGridBtn = document.getElementById('toggleGrid');
    const preview3DBtn = document.getElementById('preview3D');
    const resetViewBtn = document.getElementById('resetView');

    if (zoomInBtn) zoomInBtn.addEventListener('click', zoomIn);
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', zoomOut);
    if (toggleGridBtn) toggleGridBtn.addEventListener('click', toggleGrid);
    if (preview3DBtn) preview3DBtn.addEventListener('click', show3DPreview);
    if (resetViewBtn) resetViewBtn.addEventListener('click', resetView);
}

function setupLayerManagement() {
    const duplicateLayerBtn = document.getElementById('duplicateLayer');
    const deleteLayerBtn = document.getElementById('deleteLayer');
    const moveUpBtn = document.getElementById('moveUp');
    const moveDownBtn = document.getElementById('moveDown');

    if (duplicateLayerBtn) duplicateLayerBtn.addEventListener('click', duplicateSelectedLayer);
    if (deleteLayerBtn) deleteLayerBtn.addEventListener('click', deleteSelectedLayer);
    if (moveUpBtn) moveUpBtn.addEventListener('click', moveLayerUp);
    if (moveDownBtn) moveDownBtn.addEventListener('click', moveLayerDown);
}

function setupDesignActions() {
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    const saveBtn = document.querySelector('.btn-save');
    const exportBtn = document.querySelector('.btn-export');
    const undoBtn = document.getElementById('undoBtn');
    const redoBtn = document.getElementById('redoBtn');
    const saveDesignBtn = document.getElementById('saveDesign');

    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addCurrentDesignToCart();
        });
    }
    
    if (saveBtn) saveBtn.addEventListener('click', saveDesign);
    if (exportBtn) exportBtn.addEventListener('click', exportDesign);
    if (undoBtn) undoBtn.addEventListener('click', () => appState.undo());
    if (redoBtn) redoBtn.addEventListener('click', () => appState.redo());
    if (saveDesignBtn) saveDesignBtn.addEventListener('click', saveDesign);
}

// Enhanced Design Functions
function selectProductForDesign(product) {
    console.log('Selecting product for design:', product.name);
    appState.selectedProduct = product;
    
    // Update UI
    document.querySelectorAll('.product-option').forEach(option => {
        option.classList.remove('selected');
        if (option.getAttribute('data-product-id') === product.id) {
            option.classList.add('selected');
        }
    });

    // Update canvas with enhanced preview
    updateProductPreview(product);
    
    // Navigate to design page if not already there
    if (appState.currentPage !== 'design') {
        navigateToPage('design');
    }

    // Reset design state
    appState.designElements = [];
    appState.designHistory = [];
    appState.currentHistoryIndex = -1;
    
    // Initialize design
    appState.addToHistory('select_product');
    updateDesignStats();
    updateCanvasInfo();
    
    // AI welcome message for new product
    setTimeout(() => {
        const aiChat = document.getElementById('aiChat');
        if (aiChat) {
            const message = document.createElement('div');
            message.className = 'ai-message';
            message.textContent = `رائع! اخترت ${product.name}. ابدأ بإضافة نص أو صور لإنشاء تصميم مميز! 🎨`;
            aiChat.appendChild(message);
            aiChat.scrollTop = aiChat.scrollHeight;
        }
    }, 500);
}

function updateProductPreview(product) {
    const productPreview = document.getElementById('productPreview');
    const selectedProductSpan = document.getElementById('selectedProduct');
    
    if (productPreview && selectedProductSpan) {
        productPreview.innerHTML = `
            <div class="selected-product-preview" style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(var(--color-teal-500-rgb), 0.1), rgba(var(--color-bg-2-rgb, 245, 158, 11), 0.1));">
                <div class="product-icon" style="font-size: 150px; margin-bottom: 20px; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1)); animation: productFloat 3s ease-in-out infinite;">${product.icon}</div>
                <h3 style="margin: 10px 0; color: var(--color-text); font-size: 18px; text-align: center;">${product.name}</h3>
                <p style="color: var(--color-text-secondary); text-align: center; margin: 5px 0; font-size: 14px;">منطقة التصميم جاهزة</p>
                <div class="design-tips" style="position: absolute; bottom: 20px; left: 20px; right: 20px;">
                    <div class="tip-item" style="background: rgba(255,255,255,0.9); padding: 8px 12px; border-radius: 6px; margin: 4px 0; font-size: 12px; text-align: center; border-left: 3px solid var(--color-primary);">
                        💡 اسحب العناصر لتحريكها
                    </div>
                    <div class="tip-item" style="background: rgba(255,255,255,0.9); padding: 8px 12px; border-radius: 6px; margin: 4px 0; font-size: 12px; text-align: center; border-left: 3px solid var(--color-teal-400);">
                        🎯 استخدم المعاينة ثلاثية الأبعاد
                    </div>
                </div>
            </div>
        `;
        selectedProductSpan.textContent = product.name;
    }
}

function addTextElement(text) {
    if (!appState.selectedProduct) {
        showToast('يرجى اختيار منتج أولاً', 'error');
        return;
    }

    const element = {
        id: Date.now(),
        type: 'text',
        content: text,
        color: appState.currentDesignColor,
        fontSize: appState.currentTextSize,
        fontFamily: appState.currentFont,
        x: 100 + Math.random() * 200,
        y: 150 + Math.random() * 200,
        rotation: 0,
        opacity: 1,
        zIndex: appState.designElements.length
    };

    appState.designElements.push(element);
    appState.addToHistory('add_text');
    renderDesignElements();
    updateDesignStats();
    
    // Trigger AI analysis
    setTimeout(() => aiAssistant.analyzeDesign(), 1000);
    
    showToast('تم إضافة النص بنجاح!', 'success');
}

function addShapeElement(shapeType) {
    if (!appState.selectedProduct) {
        showToast('يرجى اختيار منتج أولاً', 'error');
        return;
    }

    const shapeIcons = {
        rectangle: '⬜',
        circle: '⭕',
        triangle: '🔺',
        star: '⭐',
        heart: '❤️',
        arrow: '➡️'
    };

    const element = {
        id: Date.now(),
        type: 'shape',
        shapeType: shapeType,
        content: shapeIcons[shapeType] || '⬜',
        color: appState.currentDesignColor,
        x: 150 + Math.random() * 150,
        y: 200 + Math.random() * 150,
        width: 60,
        height: 60,
        rotation: 0,
        opacity: 1,
        zIndex: appState.designElements.length
    };

    appState.designElements.push(element);
    appState.addToHistory('add_shape');
    renderDesignElements();
    updateDesignStats();
    
    showToast('تم إضافة الشكل بنجاح!', 'success');
}

function addImageElement(imageSrc) {
    if (!appState.selectedProduct) {
        showToast('يرجى اختيار منتج أولاً', 'error');
        return;
    }

    const element = {
        id: Date.now(),
        type: 'image',
        src: imageSrc,
        x: 100 + Math.random() * 150,
        y: 100 + Math.random() * 150,
        width: 100,
        height: 100,
        rotation: 0,
        opacity: 1,
        zIndex: appState.designElements.length
    };

    appState.designElements.push(element);
    appState.addToHistory('add_image');
    renderDesignElements();
    updateDesignStats();
}

function renderDesignElements() {
    const productPreview = document.getElementById('productPreview');
    if (!productPreview || !appState.selectedProduct) return;

    let elementsHTML = '';
    
    // Sort elements by z-index
    const sortedElements = [...appState.designElements].sort((a, b) => a.zIndex - b.zIndex);
    
    sortedElements.forEach(element => {
        const isSelected = appState.selectedElement && appState.selectedElement.id === element.id;
        const selectedClass = isSelected ? 'selected' : '';
        
        if (element.type === 'text') {
            elementsHTML += `
                <div class="design-element text-element ${selectedClass}" 
                     style="position: absolute; left: ${element.x}px; top: ${element.y}px; 
                            color: ${element.color}; font-size: ${element.fontSize}px; 
                            font-family: ${element.fontFamily}; font-weight: bold; 
                            cursor: move; z-index: ${element.zIndex + 10}; 
                            transform: rotate(${element.rotation}deg); 
                            opacity: ${element.opacity};
                            ${isSelected ? 'border: 2px dashed var(--color-primary); padding: 4px;' : ''}
                            user-select: none; background: ${isSelected ? 'rgba(var(--color-primary-rgb), 0.1)' : 'rgba(255,255,255,0.1)'}; 
                            padding: 4px 8px; border-radius: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
                     data-element-id="${element.id}">
                    ${element.content}
                </div>
            `;
        } else if (element.type === 'shape') {
            elementsHTML += `
                <div class="design-element shape-element ${selectedClass}" 
                     style="position: absolute; left: ${element.x}px; top: ${element.y}px; 
                            width: ${element.width}px; height: ${element.height}px;
                            color: ${element.color}; font-size: ${element.width * 0.8}px;
                            cursor: move; z-index: ${element.zIndex + 10}; 
                            transform: rotate(${element.rotation}deg); 
                            opacity: ${element.opacity}; display: flex; align-items: center; justify-content: center;
                            ${isSelected ? 'border: 2px dashed var(--color-primary);' : ''}
                            user-select: none; background: ${isSelected ? 'rgba(var(--color-primary-rgb), 0.1)' : 'transparent'}; 
                            border-radius: 4px;"
                     data-element-id="${element.id}">
                    ${element.content}
                </div>
            `;
        } else if (element.type === 'image') {
            elementsHTML += `
                <div class="design-element image-element ${selectedClass}" 
                     style="position: absolute; left: ${element.x}px; top: ${element.y}px; 
                            width: ${element.width}px; height: ${element.height}px;
                            cursor: move; z-index: ${element.zIndex + 10}; 
                            transform: rotate(${element.rotation}deg); 
                            opacity: ${element.opacity};
                            ${isSelected ? 'border: 2px dashed var(--color-primary);' : ''}
                            border-radius: 4px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"
                     data-element-id="${element.id}">
                    <img src="${element.src}" style="width: 100%; height: 100%; object-fit: cover;" draggable="false">
                </div>
            `;
        }
    });

    productPreview.innerHTML = `
        <div class="selected-product-preview" style="position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(135deg, rgba(var(--color-teal-500-rgb), 0.1), rgba(var(--color-bg-2-rgb, 245, 158, 11), 0.1));">
            <div class="product-icon" style="font-size: 150px; margin-bottom: 20px; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1)); opacity: 0.7; z-index: 1;">${appState.selectedProduct.icon}</div>
            ${elementsHTML}
        </div>
    `;

    // Add element interactions
    setupElementInteractions();
    updateLayersList();
}

function setupElementInteractions() {
    const elements = document.querySelectorAll('.design-element');
    
    elements.forEach(element => {
        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };
        
        element.addEventListener('mousedown', (e) => {
            e.preventDefault();
            isDragging = true;
            
            const rect = element.getBoundingClientRect();
            const containerRect = element.closest('.product-preview').getBoundingClientRect();
            
            dragOffset.x = e.clientX - rect.left;
            dragOffset.y = e.clientY - rect.top;
            
            // Select element
            selectElement(element);
            
            // Add global mouse move and up listeners
            const handleMouseMove = (e) => {
                if (!isDragging) return;
                
                const containerRect = element.closest('.product-preview').getBoundingClientRect();
                const newX = e.clientX - containerRect.left - dragOffset.x;
                const newY = e.clientY - containerRect.top - dragOffset.y;
                
                // Constrain to container bounds
                const maxX = containerRect.width - element.offsetWidth;
                const maxY = containerRect.height - element.offsetHeight;
                
                const constrainedX = Math.max(0, Math.min(newX, maxX));
                const constrainedY = Math.max(0, Math.min(newY, maxY));
                
                element.style.left = constrainedX + 'px';
                element.style.top = constrainedY + 'px';
                
                // Update element data
                const elementId = parseInt(element.dataset.elementId);
                const designElement = appState.designElements.find(el => el.id === elementId);
                if (designElement) {
                    designElement.x = constrainedX;
                    designElement.y = constrainedY;
                }
            };
            
            const handleMouseUp = () => {
                if (isDragging) {
                    isDragging = false;
                    appState.addToHistory('move_element');
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                    
                    // Trigger AI analysis after move
                    setTimeout(() => aiAssistant.analyzeDesign(), 500);
                }
            };
            
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        });
        
        // Double click to edit text
        if (element.classList.contains('text-element')) {
            element.addEventListener('dblclick', () => {
                editTextElement(element);
            });
        }
    });
}

function selectElement(elementDOM) {
    // Remove previous selection
    document.querySelectorAll('.design-element').forEach(el => {
        el.classList.remove('selected');
        el.style.border = 'none';
        el.style.background = el.classList.contains('text-element') ? 'rgba(255,255,255,0.1)' : 'transparent';
    });
    
    // Select new element
    elementDOM.classList.add('selected');
    elementDOM.style.border = '2px dashed var(--color-primary)';
    elementDOM.style.background = 'rgba(var(--color-primary-rgb, 51, 128, 141), 0.1)';
    
    const elementId = parseInt(elementDOM.dataset.elementId);
    appState.selectedElement = appState.designElements.find(el => el.id === elementId);
    
    updateElementProperties();
}

function updateElementProperties() {
    const elementProperties = document.getElementById('elementProperties');
    if (!elementProperties || !appState.selectedElement) {
        if (elementProperties) {
            elementProperties.innerHTML = `
                <div class="no-selection">
                    <p>اختر عنصراً لعرض خصائصه</p>
                </div>
            `;
        }
        return;
    }

    const element = appState.selectedElement;
    
    elementProperties.innerHTML = `
        <div class="property-group">
            <label class="form-label">الموضع X</label>
            <input type="range" class="form-control" min="0" max="400" value="${element.x}" id="elementX">
        </div>
        <div class="property-group">
            <label class="form-label">الموضع Y</label>
            <input type="range" class="form-control" min="0" max="500" value="${element.y}" id="elementY">
        </div>
        ${element.type === 'text' ? `
            <div class="property-group">
                <label class="form-label">حجم النص</label>
                <input type="range" class="form-control" min="12" max="48" value="${element.fontSize}" id="elementFontSize">
            </div>
            <div class="property-group">
                <label class="form-label">لون النص</label>
                <input type="color" class="form-control" value="${element.color}" id="elementColor">
            </div>
        ` : ''}
        ${element.type === 'shape' ? `
            <div class="property-group">
                <label class="form-label">العرض</label>
                <input type="range" class="form-control" min="20" max="150" value="${element.width}" id="elementWidth">
            </div>
            <div class="property-group">
                <label class="form-label">الارتفاع</label>
                <input type="range" class="form-control" min="20" max="150" value="${element.height}" id="elementHeight">
            </div>
        ` : ''}
        ${element.type === 'image' ? `
            <div class="property-group">
                <label class="form-label">العرض</label>
                <input type="range" class="form-control" min="50" max="200" value="${element.width}" id="elementWidth">
            </div>
            <div class="property-group">
                <label class="form-label">الارتفاع</label>
                <input type="range" class="form-control" min="50" max="200" value="${element.height}" id="elementHeight">
            </div>
        ` : ''}
        <div class="property-group">
            <label class="form-label">الدوران</label>
            <input type="range" class="form-control" min="0" max="360" value="${element.rotation}" id="elementRotation">
        </div>
        <div class="property-group">
            <label class="form-label">الشفافية</label>
            <input type="range" class="form-control" min="0" max="100" value="${element.opacity * 100}" id="elementOpacity">
        </div>
    `;

    // Add event listeners for property changes
    setupPropertyListeners();
}

function setupPropertyListeners() {
    const propertyInputs = document.querySelectorAll('#elementProperties input');
    
    propertyInputs.forEach(input => {
        input.addEventListener('input', PerformanceManager.throttle(() => {
            updateElementProperty(input.id, input.value);
        }, 50));
    });
}

function updateElementProperty(propertyId, value) {
    if (!appState.selectedElement) return;
    
    const element = appState.selectedElement;
    
    switch (propertyId) {
        case 'elementX':
            element.x = parseInt(value);
            break;
        case 'elementY':
            element.y = parseInt(value);
            break;
        case 'elementFontSize':
            element.fontSize = parseInt(value);
            break;
        case 'elementColor':
            element.color = value;
            break;
        case 'elementWidth':
            element.width = parseInt(value);
            break;
        case 'elementHeight':
            element.height = parseInt(value);
            break;
        case 'elementRotation':
            element.rotation = parseInt(value);
            break;
        case 'elementOpacity':
            element.opacity = parseFloat(value) / 100;
            break;
    }
    
    renderDesignElements();
    appState.lastModified = new Date().toLocaleTimeString('ar-SA');
    updateDesignStats();
}

// Canvas Tools Functions
function zoomIn() {
    appState.zoomLevel = Math.min(appState.zoomLevel + 0.1, 2);
    updateCanvasZoom();
}

function zoomOut() {
    appState.zoomLevel = Math.max(appState.zoomLevel - 0.1, 0.5);
    updateCanvasZoom();
}

function updateCanvasZoom() {
    const designArea = document.getElementById('designArea');
    const zoomIndicator = document.getElementById('zoomIndicator');
    
    if (designArea) {
        designArea.style.transform = `scale(${appState.zoomLevel})`;
        designArea.style.transformOrigin = 'center center';
    }
    
    if (zoomIndicator) {
        zoomIndicator.textContent = Math.round(appState.zoomLevel * 100) + '%';
    }
}

function toggleGrid() {
    const designArea = document.getElementById('designArea');
    if (!designArea) return;
    
    appState.isGridVisible = !appState.isGridVisible;
    
    if (appState.isGridVisible) {
        designArea.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)';
        designArea.style.backgroundSize = '20px 20px';
    } else {
        designArea.style.backgroundImage = '';
        designArea.style.backgroundSize = '';
    }
}

function show3DPreview() {
    if (!appState.selectedProduct) {
        showToast('يرجى اختيار منتج أولاً', 'error');
        return;
    }
    
    const productPreview = document.getElementById('productPreview');
    if (productPreview) {
        // Create 3D effect
        productPreview.style.transform = 'perspective(1000px) rotateY(15deg) rotateX(5deg) scale(1.05)';
        productPreview.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        productPreview.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        
        // Add floating animation
        const elements = productPreview.querySelectorAll('.design-element');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = 'float 2s ease-in-out infinite';
                element.style.animationDelay = (index * 0.2) + 's';
            }, index * 100);
        });
        
        // Reset after preview
        setTimeout(() => {
            productPreview.style.transform = 'none';
            productPreview.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            elements.forEach(element => {
                element.style.animation = '';
            });
        }, 4000);
    }
    
    // AI feedback
    setTimeout(() => {
        const suggestions = [
            "🎯 معاينة ثلاثية الأبعاد رائعة! التصميم يبدو مثالياً للطباعة",
            "✨ التصميم متوازن وجميل من جميع الزوايا!",
            "🚀 جودة ممتازة! جاهز للإنتاج بدقة عالية"
        ];
        
        const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
        const aiChat = document.getElementById('aiChat');
        if (aiChat) {
            const message = document.createElement('div');
            message.className = 'ai-message';
            message.textContent = randomSuggestion;
            aiChat.appendChild(message);
            aiChat.scrollTop = aiChat.scrollHeight;
        }
    }, 1000);
}

function resetView() {
    appState.zoomLevel = 1;
    appState.isGridVisible = false;
    updateCanvasZoom();
    toggleGrid(); // This will turn off the grid
}

// Layer Management Functions
function updateLayersList() {
    const layersList = document.getElementById('layersList');
    if (!layersList) return;

    // Keep base layer and add design elements
    const baseLayer = layersList.querySelector('.base-layer');
    layersList.innerHTML = '';
    
    if (baseLayer) {
        layersList.appendChild(baseLayer);
    } else {
        const newBaseLayer = document.createElement('div');
        newBaseLayer.className = 'layer-item base-layer';
        newBaseLayer.innerHTML = `
            <span class="layer-icon">🎨</span>
            <span class="layer-name">الخلفية</span>
        `;
        layersList.appendChild(newBaseLayer);
    }

    // Add design elements as layers
    appState.designElements
        .sort((a, b) => b.zIndex - a.zIndex) // Highest z-index first
        .forEach((element, index) => {
            const layerItem = document.createElement('div');
            layerItem.className = 'layer-item';
            layerItem.dataset.elementId = element.id;
            
            const typeIcons = {
                text: '📝',
                shape: '🔷',
                image: '🖼️'
            };
            
            layerItem.innerHTML = `
                <span class="layer-icon">${typeIcons[element.type] || '📝'}</span>
                <span class="layer-name">${element.type === 'text' ? element.content.substring(0, 15) + (element.content.length > 15 ? '...' : '') : element.type === 'shape' ? 'شكل ' + element.shapeType : 'صورة'}</span>
                <span class="layer-visibility" onclick="toggleLayerVisibility(${element.id})">👁️</span>
            `;
            
            layerItem.addEventListener('click', () => {
                selectElementById(element.id);
            });
            
            layersList.appendChild(layerItem);
        });
}

function selectElementById(elementId) {
    const elementDOM = document.querySelector(`[data-element-id="${elementId}"]`);
    if (elementDOM) {
        selectElement(elementDOM);
    }
}

function duplicateSelectedLayer() {
    if (!appState.selectedElement) {
        showToast('يرجى اختيار عنصر أولاً', 'error');
        return;
    }

    const newElement = {
        ...appState.selectedElement,
        id: Date.now(),
        x: appState.selectedElement.x + 20,
        y: appState.selectedElement.y + 20,
        zIndex: appState.designElements.length
    };

    appState.designElements.push(newElement);
    appState.addToHistory('duplicate_element');
    renderDesignElements();
    updateDesignStats();
    
    showToast('تم تكرار العنصر بنجاح!', 'success');
}

function deleteSelectedLayer() {
    if (!appState.selectedElement) {
        showToast('يرجى اختيار عنصر أولاً', 'error');
        return;
    }

    const elementIndex = appState.designElements.findIndex(el => el.id === appState.selectedElement.id);
    if (elementIndex > -1) {
        appState.designElements.splice(elementIndex, 1);
        appState.selectedElement = null;
        appState.addToHistory('delete_element');
        renderDesignElements();
        updateDesignStats();
        updateElementProperties();
        
        showToast('تم حذف العنصر بنجاح!', 'success');
    }
}

function moveLayerUp() {
    if (!appState.selectedElement) return;

    const element = appState.selectedElement;
    const maxZIndex = Math.max(...appState.designElements.map(el => el.zIndex));
    
    if (element.zIndex < maxZIndex) {
        element.zIndex++;
        renderDesignElements();
        updateLayersList();
        appState.addToHistory('move_layer_up');
    }
}

function moveLayerDown() {
    if (!appState.selectedElement) return;

    const element = appState.selectedElement;
    const minZIndex = Math.min(...appState.designElements.map(el => el.zIndex));
    
    if (element.zIndex > minZIndex) {
        element.zIndex--;
        renderDesignElements();
        updateLayersList();
        appState.addToHistory('move_layer_down');
    }
}

// Design Stats and Info
function updateDesignStats() {
    const elementsCount = document.getElementById('elementsCount');
    const colorsCount = document.getElementById('colorsCount');
    const dimensionsInfo = document.getElementById('dimensionsInfo');
    const lastModifiedElement = document.getElementById('lastModified');
    
    if (elementsCount) {
        elementsCount.textContent = appState.designElements.length;
    }
    
    if (colorsCount) {
        const uniqueColors = [...new Set(appState.designElements.map(el => el.color))].filter(Boolean);
        colorsCount.textContent = uniqueColors.length;
    }
    
    if (dimensionsInfo) {
        dimensionsInfo.textContent = '500x600px';
    }
    
    if (lastModifiedElement && appState.lastModified) {
        lastModifiedElement.textContent = appState.lastModified;
    }
}

function updateCanvasInfo() {
    const selectedProductSpan = document.getElementById('selectedProduct');
    if (selectedProductSpan && appState.selectedProduct) {
        selectedProductSpan.textContent = appState.selectedProduct.name;
    }
}

// Design Actions
function addCurrentDesignToCart() {
    if (!appState.selectedProduct) {
        showToast('يرجى اختيار منتج أولاً', 'error');
        return;
    }

    if (appState.designElements.length === 0) {
        showToast('يرجى إضافة عناصر للتصميم أولاً', 'error');
        return;
    }

    const cartItem = {
        id: Date.now(),
        product: appState.selectedProduct,
        design: JSON.parse(JSON.stringify(appState.designElements)),
        customDesign: true,
        price: appState.selectedProduct.price,
        designQuality: appState.designQuality || 85
    };

    addToCart(cartItem);
    showToast('✅ تم إضافة التصميم للسلة بنجاح!', 'success');
    
    // AI congratulations
    setTimeout(() => {
        const aiChat = document.getElementById('aiChat');
        if (aiChat) {
            const message = document.createElement('div');
            message.className = 'ai-message';
            message.textContent = '🎉 رائع! تم إضافة تصميمك الإبداعي للسلة. يمكنك الآن إنشاء تصميم جديد أو إتمام الطلب!';
            aiChat.appendChild(message);
            aiChat.scrollTop = aiChat.scrollHeight;
        }
    }, 500);
}

function saveDesign() {
    if (!appState.selectedProduct || appState.designElements.length === 0) {
        showToast('لا يوجد تصميم للحفظ', 'error');
        return;
    }

    // Simulate design saving
    const designData = {
        product: appState.selectedProduct,
        elements: appState.designElements,
        timestamp: Date.now(),
        quality: appState.designQuality
    };

    // In a real app, this would be sent to a server
    console.log('Design saved:', designData);
    
    showToast('تم حفظ التصميم بنجاح!', 'success');
    
    // Update last modified time
    appState.lastModified = new Date().toLocaleTimeString('ar-SA');
    updateDesignStats();
}

function exportDesign() {
    if (!appState.selectedProduct || appState.designElements.length === 0) {
        showToast('لا يوجد تصميم للتصدير', 'error');
        return;
    }

    // Simulate export process
    showToast('جاري تصدير التصميم...', 'info');
    
    setTimeout(() => {
        showToast('تم تصدير التصميم بصيغة عالية الدقة!', 'success');
    }, 2000);
}

// Shopping Cart Enhanced Functions
function addToCart(item) {
    appState.cart.push(item);
    updateCartCount();
    updateCartDisplay();
    appState.saveCartToStorage();
    
    // Add animation to cart button
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.style.animation = 'pulse 0.5s ease';
        setTimeout(() => {
            cartBtn.style.animation = '';
        }, 500);
    }
}

function removeFromCart(itemId) {
    const itemIndex = appState.cart.findIndex(item => item.id === itemId);
    if (itemIndex > -1) {
        appState.cart.splice(itemIndex, 1);
        updateCartCount();
        updateCartDisplay();
        appState.saveCartToStorage();
        showToast('تم حذف العنصر من السلة', 'info');
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = appState.cart.length;
        cartCount.style.display = appState.cart.length > 0 ? 'flex' : 'none';
    }
}

function showCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.remove('hidden');
        updateCartDisplay();
        document.body.style.overflow = 'hidden';
    }
}

function hideCart() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTax = document.getElementById('cartTax');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    if (appState.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>سلة التسوق فارغة</h3>
                <p>ابدأ بإضافة منتجات لسلة التسوق</p>
                <button class="btn btn--primary" onclick="navigateToPage('products')">تسوق الآن</button>
            </div>
        `;
        if (cartFooter) cartFooter.style.display = 'none';
        return;
    }

    let subtotal = 0;
    cartItems.innerHTML = '';

    appState.cart.forEach(item => {
        subtotal += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        const designInfo = item.customDesign 
            ? `<div class="cart-item-design">تصميم مخصص (${item.design.length} عنصر) - جودة ${item.designQuality}%</div>`
            : item.isQuickAdd 
            ? `<div class="cart-item-design">إضافة سريعة</div>`
            : '';
        
        cartItem.innerHTML = `
            <div class="cart-item-icon">${item.product.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.product.name}</div>
                <div class="cart-item-price">${item.price} ريال</div>
                ${designInfo}
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="حذف">
                🗑️
            </button>
        `;
        cartItems.appendChild(cartItem);
    });

    // Calculate totals
    const tax = Math.round(subtotal * 0.15);
    const total = subtotal + tax;

    if (cartSubtotal) cartSubtotal.textContent = `${subtotal} ريال`;
    if (cartTax) cartTax.textContent = `${tax} ريال`;
    if (cartTotal) cartTotal.textContent = `${total} ريال`;
    
    if (cartFooter) cartFooter.style.display = 'block';

    // Setup checkout button
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.onclick = () => {
            processCheckout(total);
        };
    }
}

function processCheckout(total) {
    // Simulate checkout process
    showToast('جاري معالجة الطلب...', 'info');
    
    setTimeout(() => {
        showToast(`تم تأكيد طلبك بنجاح! سيتم إنتاج ${appState.cart.length} منتج وإرساله إليك. المبلغ الإجمالي: ${total} ريال`, 'success');
        
        // Clear cart
        appState.cart = [];
        updateCartCount();
        appState.saveCartToStorage();
        hideCart();
        
        // Show success modal or redirect
        setTimeout(() => {
            showToast('شكراً لاختيارك Print Imagination! ستصلك رسالة تأكيد قريباً.', 'success');
        }, 1000);
    }, 2000);
}

// Performance and Theme Functions
function initializePerformanceOptimizations() {
    // Lazy load images
    PerformanceManager.lazyLoadImages();
    
    // Optimize heavy animations based on user preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }
    
    // Preload critical assets
    const criticalImages = [
        // Add any critical image URLs here
    ];
    PerformanceManager.preloadImages(criticalImages);
}

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-color-scheme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        appState.theme = newTheme;
        
        // Animate theme change
        document.documentElement.style.transition = 'color 0.3s ease, background-color 0.3s ease';
        setTimeout(() => {
            document.documentElement.style.transition = '';
        }, 300);
        
        showToast(`تم التبديل إلى الوضع ${newTheme === 'dark' ? 'المظلم' : 'المضيء'}`, 'info');
    });
}

function createQualityChart() {
    const canvas = document.getElementById('qualityChart');
    if (!canvas || !window.Chart) return;

    const ctx = canvas.getContext('2d');
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['جودة ممتازة', 'جودة جيدة', 'قيد التحسين'],
            datasets: [{
                data: [85, 12, 3],
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Utility Functions
function showProductQuickPreview(product) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content" style="max-width: 400px;">
            <div class="modal-header">
                <h3 class="modal-title">${product.name}</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body" style="text-align: center;">
                <div style="font-size: 80px; margin: 20px 0;">${product.icon}</div>
                <p>${product.description}</p>
                <div style="font-size: 24px; color: var(--color-primary); margin: 16px 0;">
                    ${product.price} ${product.currency}
                </div>
                <button class="btn btn--primary" onclick="selectProductForDesign(appData.products.find(p => p.id === '${product.id}'))">
                    ابدأ التصميم
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add close functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    const closeModal = () => {
        document.body.removeChild(modal);
    };
    
    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Auto close after 5 seconds
    setTimeout(closeModal, 5000);
}

// Initialize design tool when page loads
function initializeDesignTool() {
    appState.designElements = [];
    appState.selectedElement = null;
    appState.designHistory = [];
    appState.currentHistoryIndex = -1;
    
    updateDesignStats();
    updateLayersList();
    updateElementProperties();
    appState.updateHistoryButtons();
    
    // Send AI welcome message for design tool
    setTimeout(() => {
        aiAssistant.sendWelcomeMessage();
    }, 500);
}

// Expose necessary functions to global scope for HTML event handlers
window.removeFromCart = removeFromCart;
window.navigateToPage = navigateToPage;
window.selectProductForDesign = selectProductForDesign;
window.appData = appData;
window.appState = appState;