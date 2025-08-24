tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "hsl(240 10% 3.9%)",
        foreground: "hsl(0 0% 98%)",
        card: "hsl(240 10% 3.9%)",
        "card-foreground": "hsl(0 0% 98%)",
        primary: "hsl(346 77% 49.8%)",
        "primary-foreground": "hsl(355.7 100% 97.3%)",
        secondary: "hsl(240 3.7% 15.9%)",
        "secondary-foreground": "hsl(0 0% 98%)",
        muted: "hsl(240 3.7% 15.9%)",
        "muted-foreground": "hsl(240 5% 64.9%)",
        accent: "hsl(12 76% 61%)",
        "accent-foreground": "hsl(0 0% 98%)",
        border: "hsl(240 3.7% 15.9%)",
        html: "hsl(12 76% 61%)",
        tailwind: "hsl(198 93% 60%)",
        bootstrap: "hsl(262 83% 58%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 50px hsl(346 77% 49.8% / 0.3)" },
          "100%": { boxShadow: "0 0 80px hsl(346 77% 49.8% / 0.6)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};
