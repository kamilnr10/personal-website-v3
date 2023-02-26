module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        accent: "#B809C3",
      },
      backgroundImage: {
        site: "url('../src/assets/site-bg.jpeg')",
        logo: "url('../src/assets/logo.png)",
        about: "url('../src/assets/about.png)",
        services: "url('./src/assets/services.png)",
      },
      animation: {
        "waving-hand": "wave 30s linear infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": {
            borderRadius: "30% 70% 70% 30% / 30% 52% 48% 70%",
            boxShadow: "0 20px 40px #ffb6c1 inset, 0 10px 40px #f36196 inset",
            filter:
              "drop-shadow(0 0 30px thistle) drop-shadow(0 50px 40px #CC66CC) drop-shadow(20px -20px 15px #7b68ee) drop-shadow(0 0 70px #ba55d3)",
          },
          "10%": { borderRadius: "50% 50% 20% 80% / 25% 80% 20% 75%" },
          "20%": { borderRadius: "67% 33% 47% 53% / 37% 20% 80% 63%" },
          "30%": { borderRadius: "39% 61% 47% 53% / 37% 40% 60% 63%" },
          "40%": { borderRadius: "39% 61% 82% 18% / 74% 40% 60% 26%" },
          "50%": { borderRadius: "100%" },
          "60%": { borderRadius: "50% 50% 53% 47% / 26% 22% 78% 74%" },
          "70%": { borderRadius: "50% 50% 53% 47% / 26% 22% 78% 74%" },
          "80%": { borderRadius: "50% 50% 53% 47% / 26% 69% 31% 74%" },
          "90%": { borderRadius: "20% 80% 20% 80% / 20% 80% 20% 80%" },
        },
      },
    },
  },
  plugins: [],
};
