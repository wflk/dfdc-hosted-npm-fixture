# Dataform hosted npm fixture

This public repository is an inert fixture for authorized Google VRP research.

This commit is the workspace-enabled, no-`files` callback probe. It contains no lifecycle scripts,
dependencies, binaries, secrets, or committed execution marker. If separately loaded through the
caller's npm configuration, the preload writes one fixed marker and sends one fixed HTTPS GET to
the caller-owned receiver. It reads no files or environment variables and executes no commands.
