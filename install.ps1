# ==============================================================================
# SandSquircle UI Agent Skill - Universal Installer (Windows PowerShell)
# Installs sandsquircle into Google Antigravity / Claude Code / Cursor skills
# ==============================================================================

[CmdletBinding()]
param (
    [switch]$Local,
    [string]$CustomPath = ""
)

$ErrorActionPreference = "Stop"

$SkillName = "sandsquircle"
$RepoUrl = "https://github.com/Repinkindia/SandSquircle-UI-SKILL-AI.git"

Write-Host "  ___                 _ ____                    _      " -ForegroundColor DarkYellow
Write-Host " / ___|  __ _ _ __   __| / ___|  __ _ _   _ _ __ (_)_ __ " -ForegroundColor DarkYellow
Write-Host " \___ \ / _\` | '_ \ / _\` \___ \ / _\` | | | | '_ \| | '__|" -ForegroundColor DarkYellow
Write-Host "  ___) | (_| | | | | (_| |___) | (_| | |_| | |_) | | |   " -ForegroundColor DarkYellow
Write-Host " |____/ \__,_|_| |_|\__,_|____/ \__, |\__,_| .__/|_|_|   " -ForegroundColor DarkYellow
Write-Host "                                   |_|     |_|           " -ForegroundColor DarkYellow
Write-Host ""
Write-Host "SandSquircle UI Agent Skill Installer" -ForegroundColor Cyan
Write-Host "Warm Sand & Charcoal Soft-Squircle Design System for AI Agents`n" -ForegroundColor Gray

# Determine target directory
if ($CustomPath -ne "") {
    $TargetDir = $CustomPath
    $InstallMode = "custom"
} elseif ($Local) {
    $TargetDir = Join-Path (Get-Location) ".agent\skills\$SkillName"
    $InstallMode = "local project"
} else {
    $TargetDir = Join-Path $env:USERPROFILE ".gemini\antigravity\skills\$SkillName"
    $InstallMode = "global user"
}

Write-Host "Target directory: $TargetDir ($InstallMode mode)" -ForegroundColor White

# Create parent directories
$ParentDir = Split-Path -Path $TargetDir -Parent
if (!(Test-Path -Path $ParentDir)) {
    New-Item -ItemType Directory -Path $ParentDir -Force | Out-Null
}

# Determine if running from existing repo folder
$ScriptDir = $PSScriptRoot
$IsLocalRepo = $false
if ($ScriptDir -and (Test-Path (Join-Path $ScriptDir "SKILL.md"))) {
    $IsLocalRepo = $true
}

if ($IsLocalRepo -and ($ScriptDir -ne $TargetDir)) {
    Write-Host "Copying skill files from local repository..." -ForegroundColor Yellow
    if (Test-Path -Path $TargetDir) {
        Remove-Item -Path $TargetDir -Recurse -Force
    }
    Copy-Item -Path $ScriptDir -Destination $TargetDir -Recurse -Force
    
    # Remove .git from copied target
    $GitDir = Join-Path $TargetDir ".git"
    if (Test-Path -Path $GitDir) {
        Remove-Item -Path $GitDir -Recurse -Force
    }
} else {
    Write-Host "Fetching latest release from GitHub ($RepoUrl)..." -ForegroundColor Yellow
    if (Test-Path -Path $TargetDir) {
        Write-Host "Updating existing installation..." -ForegroundColor Gray
        if (Test-Path (Join-Path $TargetDir ".git")) {
            git -C $TargetDir pull --quiet origin main
        } else {
            Remove-Item -Path $TargetDir -Recurse -Force
            git clone --depth 1 $RepoUrl $TargetDir
        }
    } else {
        git clone --depth 1 $RepoUrl $TargetDir
    }
}

# Verification
$InstalledSkillPath = Join-Path $TargetDir "SKILL.md"
if (Test-Path -Path $InstalledSkillPath) {
    Write-Host "`n✔ SandSquircle Skill successfully installed!" -ForegroundColor Green
    Write-Host "Skill location: $TargetDir" -ForegroundColor White
    Write-Host "`nTriggering SandSquircle with your AI Agent:" -ForegroundColor Cyan
    Write-Host "  • `"Use the sandsquircle skill to design my React dashboard`"" -ForegroundColor Yellow
    Write-Host "  • `"Refactor this page into the SandSquircle warm sand daylight aesthetic`"" -ForegroundColor Yellow
    Write-Host "  • `"Implement the Jetpack Compose ComposeTheme.kt from sandsquircle for Android`"" -ForegroundColor Yellow
    Write-Host "  • `"Show me the SandSquircle demo preview`"`n" -ForegroundColor Yellow
} else {
    Write-Error "✖ Error: SKILL.md could not be verified in $TargetDir"
    exit 1
}
