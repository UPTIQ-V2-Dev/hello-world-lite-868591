# Fix: pnpm failed: spawnSync pnpm ENOENT

This error occurs when the system tries to execute `pnpm` commands but `pnpm` is not installed or not available in the PATH.

## Error Details

```
Error: spawnSync pnpm ENOENT
    at Object.spawnSync (node:internal/child_process:1120:20)
    at spawnSync (node:child_process:869:24)
    at Module.runCommandOrThrowError (/app/src/utils/spawn.ts:5:23)
```

**Root Cause**: The backend code generation process is trying to run `pnpm` commands, but `pnpm` is not installed on the system.

## Quick Fixes (Choose One)

### Option 1: Install pnpm via corepack (Recommended)

```bash
corepack enable
pnpm --version
```

### Option 2: Install pnpm via npm

```bash
npm install -g pnpm
pnpm --version
```

### Option 3: Use the automated fix script

```bash
chmod +x fix-pnpm.sh
./fix-pnpm.sh
```

### Option 4: Use npm instead of pnpm

If you can't install pnpm, use npm as an alternative:

```bash
npm run setup:npm
npm run build:npm
```

## Verification

After installing pnpm, verify it works:

```bash
pnpm --version
pnpm install
pnpm build
```

## For System Administrators

If this error occurs in a CI/CD or server environment:

### Docker/Container Environment

Add to your Dockerfile:

```dockerfile
RUN corepack enable
# OR
RUN npm install -g pnpm
```

### System-wide Installation

```bash
# Ubuntu/Debian
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Alpine Linux
apk add --no-cache pnpm

# CentOS/RHEL
npm install -g pnpm
```

## Alternative: Configure Project for npm

If pnpm installation is not possible, you can configure the project to use npm:

1. Remove pnpm-lock.yaml:
   ```bash
   rm pnpm-lock.yaml
   ```

2. Install with npm:
   ```bash
   npm install
   ```

3. Use npm commands:
   ```bash
   npm run dev    # instead of pnpm dev
   npm run build  # instead of pnpm build
   ```

## Prevention

To prevent this error in the future:

1. **Include pnpm in your environment setup**
2. **Document pnpm requirements in README**
3. **Add pnpm installation to CI/CD pipelines**
4. **Use package.json preinstall scripts** (already configured in this project)

## Technical Notes

- `ENOENT` means "Error: No Such File Or Directory"
- The system is looking for the `pnpm` executable but can't find it
- `spawnSync` is the Node.js method used to execute shell commands
- This error happens at the system level, not in the React code

## Contact

If none of these solutions work, the issue might be:

1. **Permission problems** - Check user permissions
2. **PATH issues** - pnpm installed but not in PATH
3. **Node.js version** - Some pnpm features require specific Node.js versions
4. **System restrictions** - Corporate firewalls or security policies

## Automated Solutions in This Project

This project includes several automated solutions:

- `preinstall` script that tries to install pnpm automatically
- `setup` script for manual pnpm installation and dependency setup
- `setup:npm` script as a fallback to use npm instead
- `fix-pnpm.sh` comprehensive installation script
- Multiple installation methods documented

Choose the method that works best for your environment.