# Firefly Prototype 🦋

*AR Speed Dating App - React Native Prototype*

This directory contains the prototype implementation of the Firefly AR speed dating application, including wireframes, a landing page demo, and React Native app skeleton.

## 📁 Structure

```
prototype/
├── index.html              # Landing page demo
├── package.json            # React Native dependencies
├── App.js                  # Main app component
├── wireframes/             # UI wireframe exports (to be added manually)
│   └── [Wireframe images from project root]

##  Adding Wireframes

To complete the prototype setup, copy the following wireframe images from the project root directory to the `prototype/wireframes/` folder:

### Core User Flow Wireframes:
1. **Login Screen** - `1 Login - 1.png`
2. **Interest Selection** - `2 Profile – 2.png` 
3. **AR Face Verification** - `2 Profile – 9.png`
4. **Global Dating Events** - `3 Tutorial – 1.png`
5. **Virtual Date Experience** - `3 Tutorial – 2.png`
6. **Find Meetups** - `4  Location – 2.png`

### Advanced AR Interface Screenshots:
7. **AR Dating Interface** - `4 Speed Date – 4.png`
8. **Multi-User AR Room** - `4  Location – 3.png`
9. **AR Interaction Tools** - `4 Speed Date – 14.png`
10. **Safety Features** - `4 Speed Date – 15.png`
11. **Confidence Boost** - `4 Speed Date – 16.png`
12. **AR Camera Tutorial** - `4 Speed Date – 17.png`
13. **Match Decision** - `4 Speed Date – 20.png`
14. **New Matches** - `4 Speed Date – 21.png`

### Command to Copy Wireframes:
```bash
# From project root directory
cp "1 Login - 1.png" "2 Profile – 2.png" "2 Profile – 9.png" "3 Tutorial – 1.png" "3 Tutorial – 2.png" "4  Location – 2.png" "4 Speed Date – 4.png" "4  Location – 3.png" "4 Speed Date – 14.png" "4 Speed Date – 15.png" "4 Speed Date – 16.png" "4 Speed Date – 17.png" "4 Speed Date – 20.png" "4 Speed Date – 21.png" prototype/wireframes/
```
└── src/
    ├── components/         # Reusable components
    │   └── TabBarIcon.js
    └── screens/           # App screens
        ├── LoginScreen.js
        ├── TutorialScreen.js
        ├── EventsScreen.js
        ├── SpeedDateScreen.js
        ├── MatchesScreen.js
        └── ProfileScreen.js
```

## 🌐 Landing Page Demo

Open `index.html` in a web browser to view the interactive landing page that showcases:

- **Project Overview**: Firefly concept and value proposition
- **Key Features**: AR technology, speed dating, safety, and meaningful connections
- **Research Data**: User survey insights and market validation
- **Wireframe Gallery**: Interactive prototype screenshots
- **Team Information**: Project team and contact details

### Features
- Responsive design for mobile and desktop
- Smooth scrolling navigation
- Interactive wireframe showcase
- Modern gradient design matching brand aesthetics

## 📱 React Native App Skeleton

The React Native prototype demonstrates the core app architecture and key user flows.

### Tech Stack
- **React Native** with Expo
- **React Navigation** for screen navigation
- **Linear Gradient** for brand-consistent styling
- **AR Libraries**: Expo Camera, GL, and Three.js integration ready
- **Firebase**: Backend services integration ready
- **WebRTC**: Real-time video chat preparation

### Key Screens

#### 1. LoginScreen.js
- **Purpose**: User authentication and onboarding
- **Features**: 
  - Facebook login integration
  - Firefly branding with animated particles
  - Terms and privacy policy links
  - Loading states and error handling

#### 2. TutorialScreen.js
- **Purpose**: AR feature introduction and app walkthrough
- **Features**:
  - Step-by-step AR feature explanation
  - Interactive tutorial flow
  - Brand-consistent design
  - Smooth transition to main app

#### 3. SpeedDateScreen.js
- **Purpose**: Core AR speed dating experience
- **Features**:
  - Virtual room visualization with participant positions
  - Real-time countdown timer
  - AR toggle functionality
  - Event statistics and participant info
  - Interactive controls (block, icebreaker, rotate view)

#### 4. EventsScreen.js (Placeholder)
- **Purpose**: Event discovery and browsing
- **Status**: Placeholder for themed dating events interface

#### 5. MatchesScreen.js (Placeholder)
- **Purpose**: Match management and messaging
- **Status**: Placeholder for connections and conversations

#### 6. ProfileScreen.js (Placeholder)
- **Purpose**: User profile management
- **Status**: Placeholder for profile editing and preferences

### Components

#### TabBarIcon.js
- **Purpose**: Consistent iconography across tab navigation
- **Features**: Emoji-based icons with color theming

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Navigate to prototype directory**:
   ```bash
   cd prototype
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Run on specific platform**:
   ```bash
   npm run ios     # iOS Simulator
   npm run android # Android Emulator
   npm run web     # Web browser
   ```

### Development Notes

- **Expo Environment**: The app is configured for Expo development workflow
- **Hot Reloading**: Changes automatically refresh during development
- **Cross-Platform**: Runs on iOS, Android, and web browsers
- **AR Integration**: Ready for ARCore/ARKit implementation

## 🎨 Design System

### Color Palette
- **Primary**: `#667eea` (Firefly Blue)
- **Secondary**: `#764ba2` (Purple Gradient)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333` (Dark Gray)
- **Accent**: `rgba(255, 255, 255, 0.1)` (Transparent White)

### Typography
- **Headers**: Bold, clean sans-serif
- **Body**: Regular weight, high readability
- **Interactive**: Medium weight for buttons and links

### Components
- **Buttons**: Rounded corners (25px radius)
- **Cards**: Subtle shadows and rounded corners
- **Gradients**: Linear gradients for brand consistency
- **Icons**: Emoji-based for universal recognition

## 🔧 Technical Implementation

### Navigation Structure
```
Stack Navigator (Root)
├── Login Screen
├── Tutorial Screen
└── Tab Navigator (Main)
    ├── Events Tab
    ├── Speed Date Tab
    ├── Matches Tab
    └── Profile Tab
```

### State Management
- **Local State**: React hooks for component-level state
- **Navigation State**: React Navigation for screen management
- **Future**: Redux/Context API for global state management

### AR Integration Preparation
- **Expo Camera**: Camera access and permissions
- **Expo GL**: OpenGL rendering for AR overlays
- **Three.js**: 3D graphics and AR scene management
- **WebRTC**: Real-time video streaming

### Backend Integration Ready
- **Firebase Auth**: User authentication
- **Firestore**: Real-time database
- **Cloud Functions**: Server-side logic
- **Storage**: Media file management

## 📊 Prototype Validation

### User Flow Testing
1. **Login Flow**: Facebook authentication → Tutorial → Main app
2. **Speed Dating Flow**: Event selection → Room entry → AR interaction
3. **Navigation Flow**: Tab-based navigation between core features

### Technical Validation
- **Cross-platform compatibility**: iOS, Android, Web
- **Performance**: Smooth animations and transitions
- **Scalability**: Component-based architecture
- **Maintainability**: Clear separation of concerns

## 🎯 Next Steps

### Phase 1: Core Implementation
- [ ] Complete AR video chat integration
- [ ] Implement Firebase backend
- [ ] Add real-time event management
- [ ] Develop matching algorithm

### Phase 2: Feature Enhancement
- [ ] Advanced AR features (virtual backgrounds)
- [ ] Payment integration
- [ ] Content moderation system
- [ ] Push notifications

### Phase 3: Polish & Launch
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] App store preparation
- [ ] Marketing integration

## 📞 Development Team

- **Germoin Green** - Project Manager
- **Dan Dao** - Lead Developer
- **Taylor Guest** - UX Designer
- **Amal AlSaieq** - UX Designer
- **Lori Byers** - UX Researcher

## 📄 Related Documentation

- [Main README](../README.md) - Project overview and UX artifacts
- [Project Charter](../docs/Project-Charter.md) - Detailed project specifications
- [Timeline](../docs/Timeline.md) - Development schedule and milestones
- [Risk Register](../docs/Risk-Register.md) - Risk management and mitigation
- [Lessons Learned](../docs/Lessons-Learned.md) - Project insights and improvements

---

*"Flying Forward" - The future of meaningful connections starts here.*

**Prototype Status**: ✅ Functional skeleton with core navigation and key screens  
**Last Updated**: March 2025  
**Version**: 0.1.0
