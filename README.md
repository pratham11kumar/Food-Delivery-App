# 🍔 Food Delivery App

A Food Delivery App UI built using React Native and Expo.

The project focuses on implementing major React Navigation patterns including Stack Navigation, Bottom Tabs, Drawer Navigation, Nested Navigators, Authentication Flow, Deep Linking and Navigation Methods.

---

## 🚀 Features

### Authentication Flow
- Login Screen
- Mock Authentication
- Persist Login State using AsyncStorage
- Auto Redirect after App Reload
- Logout Functionality

### Navigation Features
- Stack Navigator
- Bottom Tab Navigator
- Drawer Navigator
- Nested Navigators
- Deep Linking
- Screen Transition Animations

### Screens
- Onboarding Screen
- Login Screen
- Home Screen
- Restaurant Detail Screen
- Cart Screen
- Search Screen
- Orders Screen
- Profile Screen
- Drawer Screens

### Cart Features
- Add To Cart
- Orders Badge
- Dynamic Cart Screen

### Deep Linking

```bash
foodapp://restaurant/123
```

Opens Restaurant Detail directly.

---

## 🛠 Tech Stack

- React Native
- Expo
- React Navigation
- Native Stack Navigator
- Bottom Tabs Navigator
- Drawer Navigator
- AsyncStorage
- Expo Linking
- Context API

---

## 📂 Folder Structure

```bash
FoodDeliveryApp/

├── app/
│
├── navigation/
│   ├── RootNavigator.js
│   ├── TabNavigator.js
│   ├── DrawerNavigator.js
│   └── RestaurantStack.js
│
├── screens/
│
│   ├── auth/
│   │   └── LoginScreen.js
│
│   ├── home/
│   │   ├── HomeScreen.js
│   │   ├── RestaurantDetail.js
│   │   └── CartScreen.js
│
│   ├── tabs/
│   │   ├── SearchScreen.js
│   │   ├── OrdersScreen.js
│   │   └── ProfileScreen.js
│
│   └── drawer/
│       ├── MyOrders.js
│       ├── Settings.js
│       └── Help.js
│
├── context/
│   ├── AuthContext.js
│   └── CartContext.js
│
├── App.js
└── app.json
```

---

## 🔀 Navigation Structure

```text
Login
↓

Bottom Tabs

├── Home
│
│   Restaurant Stack
│
│   Home
│   ↓
│   Restaurant Detail
│   ↓
│   Cart
│
├── Search
├── Orders
│
└── Profile
    ↓
    Drawer
    ├── My Orders
    ├── Settings
    ├── Help
    └── Logout
```

---

## 🔗 Deep Linking Setup

Added in:

```json
"scheme":"foodapp"
```

Example:

```bash
foodapp://restaurant/123
```

---

## ⚡ Navigation Methods Used

- navigate()
- goBack()
- replace()
- reset()

---

## 📱 How To Run Locally

Clone Repository

```bash
git clone YOUR_GITHUB_LINK
```

Move to folder

```bash
cd FoodDeliveryApp
```

Install dependencies

```bash
npm install
```

Run Expo

```bash
npx expo start
```

Scan QR using Expo Go App.

---

## 📸 Screenshots

Add screenshots here.

- Login Screen
- Home Screen
- Restaurant Detail
- Cart Screen
- Drawer Navigation

---

## 🎥 Demo Video

Add demo video link here.

---

## 🧠 Assumptions

- Authentication is mock based
- Payment flow not implemented
- Restaurant data is static
- Cart state managed using Context API

---


## GitHub link -- https://github.com/pratham11kumar/Food-Delivery-App

## 👨‍💻 Author

Pratham
