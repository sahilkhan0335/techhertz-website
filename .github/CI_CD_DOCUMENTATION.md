# CI/CD Pipeline Documentation

## Branch Strategy

### Main Branch (`main`)
- **Purpose:** Production-ready code
- **Deployment:** Automatically deployed to Vercel
- **Merge Policy:** Only accepts merges from `dev` branch
- **Protection:** All CI checks must pass before merge

### Development Branch (`dev`)
- **Purpose:** Integration testing environment
- **Merge Policy:** Accepts merges from feature branches (feat/*, fix/*, chore/*)
- **CI Checks:** Runs full test suite on every push and PR

### Feature Branches
- **Naming Convention:**
  - `feat/*` - New features
  - `fix/*` - Bug fixes
  - `chore/*` - Maintenance tasks
- **Merge Target:** Always merge to `dev` first
- **CI Checks:** Full validation on PR to dev

## CI Pipeline Jobs

### 1. Lint Code
- Runs ESLint on all TypeScript/JavaScript files
- Ensures code style consistency
- Fails on linting errors

### 2. Type Check
- Runs TypeScript compiler in check mode
- Validates type safety across entire codebase
- No compilation output, only validation

### 3. Run Tests
- Executes test suite (when available)
- Only runs if tests are present
- Required for production merges

### 4. Build Application
- Compiles Next.js application
- Runs only after lint and type-check pass
- Uploads build artifacts for main branch PRs
- Validates production build success

### 5. Code Quality Check
- Tracks changed files in PRs
- Provides visibility into code changes
- Runs only on pull requests

### 6. Security Audit
- Runs npm audit for dependency vulnerabilities
- Checks for moderate and higher severity issues
- Continues on error (non-blocking)

### 7. PR Validation
- Final check before merge approval
- Validates that main branch PRs come from dev only
- Provides clear status messages

## Workflow Triggers

### Pull Requests to `dev`
✅ All CI checks run
✅ Must pass before merge
✅ Code review required

### Pull Requests to `main`
✅ All CI checks run
✅ Must originate from `dev` branch
✅ Build artifacts uploaded
✅ Production-ready validation

### Push to `dev`
✅ CI runs to validate dev branch state
✅ Ensures dev branch stays healthy

### Push to `main`
🚀 Automatic Vercel deployment
📦 No manual intervention needed

## Development Workflow

```bash
# 1. Create feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feat/your-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"
git push origin feat/your-feature

# 3. Create PR to dev
# - CI runs automatically
# - Wait for approval
# - Merge when green

# 4. Test on dev branch
# - Verify functionality
# - Check integration

# 5. Create PR from dev to main
git checkout dev
git pull origin dev
# Create PR: dev → main

# 6. Production deployment
# - All checks must pass
# - Merge triggers automatic Vercel deployment
# - Monitor deployment on Vercel dashboard
```

## CI Status Badges

Add these to your README.md:

```markdown
![CI Pipeline](https://github.com/sahilkhan0335/techhertz-website/workflows/CI%20Pipeline/badge.svg)
```

## Best Practices

1. **Never push directly to main or dev**
   - Always use pull requests
   - Code review is mandatory

2. **Keep feature branches small**
   - Focus on single feature/fix
   - Easier to review and test

3. **Run local checks before pushing**
   ```bash
   npm run lint
   npm run build
   npx tsc --noEmit
   ```

4. **Write descriptive commit messages**
   - Use conventional commits (feat:, fix:, chore:)
   - Clear description of changes

5. **Keep dev branch stable**
   - Only merge tested feature branches
   - Fix issues before merging to main

6. **Monitor CI failures**
   - Fix immediately
   - Don't merge broken code

## Troubleshooting

### CI Fails on Type Check
```bash
npx tsc --noEmit
# Fix type errors locally before pushing
```

### CI Fails on Build
```bash
npm run build
# Ensure build works locally
```

### CI Fails on Lint
```bash
npm run lint
# Fix linting issues
```

### Vercel Deployment Issues
- Check Vercel dashboard for logs
- Ensure environment variables are set
- Verify build settings match local config
