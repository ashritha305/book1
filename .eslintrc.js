// module.exports = {
//   root: true,
//   extends: '@react-native',
// };

// module.exports = {
//   root: true,
//   extends: [
//     '@react-native',
//   ],
//   plugins: [
//     'html' // Add this line
//   ],
//   rules: {
//     // Your custom rules here
//   }
// };


module.exports = {
  root: true,
  extends: [
    "@react-native",
    "plugin:react/recommended", // Add React plugin
  ],
  plugins: [
    "react", // Include React plugin
  ],
  rules: {
    "quotes": ["error", "double"], // Enforce double quotes
    "react/jsx-boolean-value": ["error", "always"], // Ensure boolean props are written as true/false
    "react/jsx-no-undef": "error", // Prevent undefined JSX variables
    // Add any other custom rules you want
  },
};
