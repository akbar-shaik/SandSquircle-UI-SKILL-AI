import 'package:flutter/material.dart';

// ============================================================================
// SandSquircle UI — Flutter Material 3 Theme & Widgets
// Warm Sand & Charcoal Soft-Squircle Daylight Aesthetic
// ============================================================================

class SandSquircleColors {
  // Sand Canvas Palette
  static const Color sand50 = Color(0xFFFBF9F6);
  static const Color sand100 = Color(0xFFF8F6F2); // Primary Canvas
  static const Color sand200 = Color(0xFFF4EFEA); // Dividers / Tracks
  static const Color sand300 = Color(0xFFEAE2D8); // Subtle Borders
  static const Color sand400 = Color(0xFFD8CDC0);

  // Charcoal Ink Palette
  static const Color charcoal900 = Color(0xFF111827); // Primary Ink & CTAs
  static const Color charcoal800 = Color(0xFF1F2937);
  static const Color charcoal700 = Color(0xFF374151);
  static const Color charcoal500 = Color(0xFF6B7280); // Inactive & Subtitles
  static const Color charcoal400 = Color(0xFF9CA3AF);
  static const Color charcoal200 = Color(0xFFE5E7EB);
  static const Color charcoal100 = Color(0xFFF3F4F6);

  // Brand Teal Accents
  static const Color teal700 = Color(0xFF0F766E);
  static const Color teal600 = Color(0xFF0D9488); // Active Navigation
  static const Color teal50 = Color(0xFFF0FDFA);

  // Semantic Status Tokens
  static const Color emeraldMintText = Color(0xFF10B981);
  static const Color emeraldMintBg = Color(0xFFECFDF5);
  static const Color emeraldMintBorder = Color(0xFFD1FAE5);

  static const Color crimsonCoralText = Color(0xFFEF4444);
  static const Color crimsonCoralBg = Color(0xFFFEF2F2);
  static const Color crimsonCoralBorder = Color(0xFFFEE2E2);

  static const Color amberSandText = Color(0xFFF59E0B);
  static const Color amberSandBg = Color(0xFFFFFBEB);
  static const Color amberSandBorder = Color(0xFFFEF3C7);

  static const Color hairline = Color(0x0A000000); // 4% black
}

class SandSquircleRadii {
  static const double modal = 32.0;
  static const double darkHero = 28.0;
  static const double card = 26.0;
  static const double miniCard = 22.0;
  static const double row = 16.0;
  static const double chip = 12.0;
  static const double pill = 9999.0;
}

/// SandSquircle Material 3 Theme Configuration
ThemeData get sandSquircleThemeData {
  return ThemeData(
    useMaterial3: true,
    scaffoldBackgroundColor: SandSquircleColors.sand100,
    colorScheme: const ColorScheme(
      brightness: Brightness.light,
      primary: SandSquircleColors.charcoal900,
      onPrimary: SandSquircleColors.sand50,
      secondary: SandSquircleColors.teal600,
      onSecondary: Colors.white,
      surface: Colors.white,
      onSurface: SandSquircleColors.charcoal900,
      background: SandSquircleColors.sand100,
      onBackground: SandSquircleColors.charcoal900,
      error: SandSquircleColors.crimsonCoralText,
      onError: Colors.white,
    ),
    cardTheme: CardTheme(
      color: Colors.white,
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(SandSquircleRadii.card),
        side: const BorderSide(color: SandSquircleColors.hairline, width: 1),
      ),
    ),
    appBarTheme: const AppBarTheme(
      backgroundColor: SandSquircleColors.sand100,
      foregroundColor: SandSquircleColors.charcoal900,
      elevation: 0,
      centerTitle: false,
    ),
  );
}

/// Signature SandSquircle Card Widget with diffused elevation and 26dp squircle
class SandSquircleCard extends StatelessWidget {
  final Widget child;
  final EdgeInsetsGeometry padding;
  final double cornerRadius;
  final VoidCallback? onTap;

  const SandSquircleCard({
    Key? key,
    required this.child,
    this.padding = const EdgeInsets.all(20.0),
    this.cornerRadius = SandSquircleRadii.card,
    this.onTap,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(cornerRadius),
        border: Border.all(color: SandSquircleColors.hairline, width: 1),
        boxShadow: const [
          BoxShadow(
            color: Color(0x0A000000),
            blurRadius: 20,
            offset: Offset(0, 8),
          ),
        ],
      ),
      child: Material(
        color: Colors.transparent,
        borderRadius: BorderRadius.circular(cornerRadius),
        child: InkWell(
          borderRadius: BorderRadius.circular(cornerRadius),
          onTap: onTap,
          child: Padding(
            padding: padding,
            child: child,
          ),
        ),
      ),
    );
  }
}
