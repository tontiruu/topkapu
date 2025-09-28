.PHONY: install start build preview clean release help

# Default target
help:
	@echo "Available commands:"
	@echo "  make install  - Install dependencies"
	@echo "  make start    - Start development server"
	@echo "  make build    - Build for production"
	@echo "  make preview  - Preview production build"
	@echo "  make release  - Build and deploy to GitHub Pages"
	@echo "  make clean    - Clean node_modules and dist"

# Install dependencies
install:
	npm install

# Start development server
start:
	npm run dev

# Build for production
build:
	npm run build

# Preview production build
preview:
	npm run preview

# Deploy to GitHub Pages
release:
	@echo "🚀 Building and deploying to GitHub Pages..."
	@echo "📦 Building production version..."
	npm run build
	@echo "📝 Adding dist folder to git..."
	git add dist -f
	@echo "💾 Committing changes..."
	git commit -m "🚀 Deploy: $(shell date '+%Y-%m-%d %H:%M:%S')" || true
	@echo "🌐 Pushing to gh-pages branch..."
	git subtree push --prefix dist origin gh-pages
	@echo "✅ Successfully deployed to GitHub Pages!"
	@echo "🔗 Your site will be available at: https://tontiruu.github.io/topkapu/"

# Clean up
clean:
	rm -rf node_modules dist