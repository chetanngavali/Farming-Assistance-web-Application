# 🌾 FarmAssist - Comprehensive Farming Assistance App

A modern, comprehensive web application designed to empower farmers with essential tools and information for successful farming operations. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

<img width="1903" height="872" alt="Farming Assistance App" src="https://github.com/user-attachments/assets/2a2be6b7-8a60-496e-b9f3-755cda09c0ab" />


## ✨ Features

### 🌦️ Weather Updates
- Real-time weather information with 5-day forecasts
- Farming-specific recommendations based on weather conditions
- Humidity, wind speed, UV index, and visibility data
- Weather alerts for better crop planning

### 📈 Market Price Dashboard
- Live market prices from major APMCs (Agricultural Produce Market Committees)
- Price trend analysis with percentage changes
- Search and filter functionality by crop and location
- Market performance insights and top gainers/losers

### 🛒 Direct Selling Marketplace
- Connect farmers directly with buyers
- Create buy/sell listings for agricultural products
- Contact information and ratings system
- Search by crop type, quantity, and location

### 💬 Expert Chat
- Real-time consultation with agricultural experts
- Specialized expertise in crop diseases, soil health, and organic farming
- Quick question templates for common farming issues
- Expert ratings and availability status

### 📢 Government Scheme Information
- Comprehensive database of government subsidies and schemes
- Application status tracking
- Required documents and eligibility criteria
- Financial support programs and insurance schemes

### 📚 Learning Section
- Video tutorials on modern farming techniques
- Educational articles by agricultural experts
- Progress tracking and learning analytics
- Categories: Crop Management, Pest Control, Soil Health, Technology

### 🧮 Financial Calculators
- **Loan & EMI Calculator**: Calculate monthly payments and interest
- **Profit Calculator**: Analyze crop profitability and margins
- **Fertilizer Calculator**: Get NPK recommendations based on soil and crop type

### 🌍 Multilingual Support
- Available in English, Hindi (हिंदी), and Marathi (मराठी)
- Easy language switching from the header
- Localized content for regional farmers

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **Deployment**: Netlify for reliable hosting

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with language selector
│   ├── Navigation.tsx      # Sidebar navigation menu
│   ├── Dashboard.tsx       # Main dashboard overview
│   ├── Weather.tsx         # Weather forecast and recommendations
│   ├── MarketPrices.tsx    # Live market price tracking
│   ├── Marketplace.tsx     # Buy/sell marketplace
│   ├── ExpertChat.tsx      # Expert consultation interface
│   ├── GovernmentSchemes.tsx # Government schemes and subsidies
│   ├── Learning.tsx        # Educational content hub
│   └── Calculator.tsx      # Financial and agricultural calculators
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd farming-assistance-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Design Philosophy

### User-Centric Design
- Clean, intuitive interface designed for farmers of all technical backgrounds
- Mobile-first responsive design for accessibility in rural areas
- High contrast colors and readable typography for outdoor use

### Color Palette
- **Primary Green**: #059669 (representing growth and agriculture)
- **Secondary Colors**: Blue for weather, orange for market trends
- **Neutral Grays**: For text and backgrounds
- **Status Colors**: Green for positive, red for negative, yellow for warnings

### Accessibility Features
- High contrast ratios for better readability
- Large touch targets for mobile devices
- Clear visual hierarchy with proper heading structure
- Consistent iconography throughout the application

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile Devices**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px and above

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Features in Detail

### Dashboard Overview
- Quick stats cards showing weather, prices, and activities
- Recent activities feed with timestamps
- Quick action buttons for common tasks
- Market trends visualization

### Weather Intelligence
- Location-based weather data
- Agricultural recommendations based on conditions
- Irrigation and fertilizer timing suggestions
- Extreme weather alerts

### Market Intelligence
- Real-time price feeds from multiple mandis
- Historical price trends and analysis
- Price alerts and notifications
- Market demand insights

### Expert Network
- Verified agricultural experts
- Specialization-based matching
- Chat history and consultation records
- Expert ratings and reviews

## 🤝 Contributing

We welcome contributions to improve FarmAssist! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data integration for accurate forecasts
- APMC price data for market intelligence
- Agricultural experts for content validation
- Farming community feedback for feature development

## 📞 Support

For support, feature requests, or bug reports, please:
- Open an issue on GitHub
- Contact our support team
- Join our farming community forum

---

**Built with ❤️ for the farming community**

*Empowering farmers with technology for sustainable agriculture*
