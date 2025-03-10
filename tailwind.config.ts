import { type Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx}",
	  "./src/**/*.{ts,tsx}",
	  "*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
			blue: "hsl(var(--accent-blue))",
			red: "hsl(var(--accent-red))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		  code: {
			light: "#F5F5F5",
			dark: "#333333",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		fontFamily: {
		  sans: ["var(--font-inter)"],
		  merriweather: ["var(--font-merriweather)"],
		},
		typography: {
		  DEFAULT: {
			css: {
			  maxWidth: "100%",
			  color: "hsl(var(--foreground))",
			  a: {
				color: "hsl(var(--accent-blue))",
				textDecoration: "underline",
				"&:hover": {
				  color: "hsl(var(--accent-blue) / 0.8)",
				},
			  },
			  h1: {
				fontWeight: "700",
				fontFamily: "var(--font-merriweather)",
			  },
			  h2: {
				fontWeight: "700",
				fontFamily: "var(--font-merriweather)",
			  },
			  h3: {
				fontWeight: "600",
				fontFamily: "var(--font-merriweather)",
			  },
			  blockquote: {
				borderLeftColor: "hsl(var(--border))",
				color: "hsl(var(--secondary))",
				fontStyle: "italic",
			  },
			  code: {
				backgroundColor: "#F5F5F5",
				color: "#333333",
				borderRadius: "0.25rem",
				padding: "0.125rem 0.25rem",
			  },
			  pre: {
				backgroundColor: "#F5F5F5",
				borderRadius: "var(--radius)",
			  },
			},
		  },
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;