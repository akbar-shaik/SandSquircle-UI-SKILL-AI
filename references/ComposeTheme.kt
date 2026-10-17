package com.sandsquircle.ui.theme

import android.app.Activity
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.awaitFirstDown
import androidx.compose.foundation.gestures.waitForUpOrCancellation
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.Typography
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.composed
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.draw.scale
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Paint
import androidx.compose.ui.graphics.drawscope.drawIntoCanvas
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.platform.LocalView
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.view.WindowCompat

// ============================================================================
// SandSquircle Color Tokens
// ============================================================================

val Sand50 = Color(0xFFFBF9F6)
val Sand100 = Color(0xFFF8F6F2) // Primary Viewport Canvas
val Sand200 = Color(0xFFF4EFEA) // Card Dividers / Tracks
val Sand300 = Color(0xFFEAE2D8) // Subtle Borders
val Sand400 = Color(0xFFD8CDC0) // Hairline Outlines

val Charcoal900 = Color(0xFF111827) // Primary Ink, FAB & Key CTAs
val Charcoal800 = Color(0xFF1F2937) // Dark Card Gradient End
val Charcoal700 = Color(0xFF374151) // Section Titles & Labels
val Charcoal500 = Color(0xFF6B7280) // Subtitles & Inactive Icons
val Charcoal400 = Color(0xFF9CA3AF) // Placeholders
val Charcoal200 = Color(0xFFE5E7EB) // Borders
val Charcoal100 = Color(0xFFF3F4F6) // Pill Backgrounds

val Teal700 = Color(0xFF0F766E)
val Teal600 = Color(0xFF0D9488) // Brand Accent & Active Nav
val Teal50 = Color(0xFFF0FDFA)  // Active Tab Pill Tint

// Semantic Status Tokens
val EmeraldMintText = Color(0xFF10B981)
val EmeraldMintBg = Color(0xFFECFDF5)
val EmeraldMintBorder = Color(0xFFD1FAE5)

val CrimsonCoralText = Color(0xFFEF4444)
val CrimsonCoralBg = Color(0xFFFEF2F2)
val CrimsonCoralBorder = Color(0xFFFEE2E2)

val AmberSandText = Color(0xFFF59E0B)
val AmberSandBg = Color(0xFFFFFBEB)
val AmberSandBorder = Color(0xFFFEF3C7)

// Hairline Border Color
val HairlineBorder = Color(0x0A000000) // 4% black
val HairlineBorderDark = Color(0x1AFFFFFF) // 10% white

// ============================================================================
// SandSquircle Shape Hierarchy
// ============================================================================

val SandSquircleShapes = Shapes(
    small = RoundedCornerShape(12.dp),      // Segmented Tabs & Quick Chips
    medium = RoundedCornerShape(16.dp),     // List Items, Inputs, Buttons
    large = RoundedCornerShape(26.dp),      // Primary Standard Cards
    extraLarge = RoundedCornerShape(32.dp)  // Modals & Bottom Sheets
)

val CardShape = RoundedCornerShape(26.dp)
val HeroCardShape = RoundedCornerShape(28.dp)
val MiniCardShape = RoundedCornerShape(22.dp)
val InputShape = RoundedCornerShape(16.dp)
val TabShape = RoundedCornerShape(12.dp)
val PillShape = CircleShape

// ============================================================================
// SandSquircle Typography (Plus Jakarta Sans)
// ============================================================================

val SandSquircleFontFamily = FontFamily.Default

val SandSquircleTypography = Typography(
    displayLarge = TextStyle(
        fontFamily = SandSquircleFontFamily,
        fontWeight = FontWeight.ExtraBold,
        fontSize = 36.sp,
        letterSpacing = (-0.02).sp,
        color = Charcoal900
    ),
    headlineMedium = TextStyle(
        fontFamily = SandSquircleFontFamily,
        fontWeight = FontWeight.ExtraBold,
        fontSize = 20.sp,
        letterSpacing = (-0.015).sp,
        color = Charcoal900
    ),
    titleLarge = TextStyle(
        fontFamily = SandSquircleFontFamily,
        fontWeight = FontWeight.Bold,
        fontSize = 18.sp,
        color = Charcoal900
    ),
    titleMedium = TextStyle(
        fontFamily = SandSquircleFontFamily,
        fontWeight = FontWeight.Bold,
        fontSize = 14.sp,
        color = Charcoal900
    ),
    bodyMedium = TextStyle(
        fontFamily = SandSquircleFontFamily,
        fontWeight = FontWeight.Normal,
        fontSize = 14.sp,
        color = Charcoal700
    ),
    bodySmall = TextStyle(
        fontFamily = SandSquircleFontFamily,
        fontWeight = FontWeight.Medium,
        fontSize = 12.sp,
        color = Charcoal500
    ),
    labelSmall = TextStyle(
        fontFamily = SandSquircleFontFamily,
        fontWeight = FontWeight.Bold,
        fontSize = 11.sp,
        letterSpacing = 0.5.sp,
        color = Charcoal700
    )
)

// ============================================================================
// Custom Modifiers
// ============================================================================

/**
 * Applies the signature SandSquircle ultra-diffused elevation, 26dp rounded squircle clip,
 * white background, and subtle hairline border.
 */
fun Modifier.sandSquircleCard(
    cornerRadius: Dp = 26.dp,
    elevation: Dp = 10.dp
): Modifier = composed {
    this
        .shadow(
            elevation = elevation,
            shape = RoundedCornerShape(cornerRadius),
            ambientColor = Color(0x0A000000),
            spotColor = Color(0x0A000000)
        )
        .clip(RoundedCornerShape(cornerRadius))
        .background(Color.White)
        .border(1.dp, HairlineBorder, RoundedCornerShape(cornerRadius))
}

/**
 * Applies the signature SandSquircle dark gradient hero card treatment.
 */
fun Modifier.sandSquircleDarkCard(
    cornerRadius: Dp = 28.dp
): Modifier = composed {
    this
        .shadow(
            elevation = 16.dp,
            shape = RoundedCornerShape(cornerRadius),
            ambientColor = Color(0x40111827),
            spotColor = Color(0x40111827)
        )
        .clip(RoundedCornerShape(cornerRadius))
        .background(
            Brush.linearGradient(
                colors = listOf(Charcoal900, Charcoal800)
            )
        )
        .border(1.dp, HairlineBorderDark, RoundedCornerShape(cornerRadius))
}

/**
 * Interactive spring scale-down effect for tactile touch feedback (scale to 0.96f).
 */
fun Modifier.pressClickEffect(
    pressedScale: Float = 0.96f,
    onClick: (() -> Unit)? = null
): Modifier = composed {
    var isPressed by remember { mutableStateOf(false) }
    val scale by animateFloatAsState(
        targetValue = if (isPressed) pressedScale else 1f,
        animationSpec = spring(dampingRatio = 0.6f, stiffness = 400f),
        label = "pressScaleAnimation"
    )

    this
        .scale(scale)
        .pointerInput(Unit) {
            while (true) {
                awaitPointerEventScope {
                    awaitFirstDown(requireUnconsumed = false)
                    isPressed = true
                    waitForUpOrCancellation()
                    isPressed = false
                }
            }
        }
        .then(
            if (onClick != null) {
                Modifier.clickable(
                    interactionSource = remember { MutableInteractionSource() },
                    indication = null,
                    onClick = onClick
                )
            } else Modifier
        )
}

// ============================================================================
// Material3 Theme Setup
// ============================================================================

private val SandSquircleColorScheme = lightColorScheme(
    primary = Charcoal900,
    onPrimary = Sand50,
    secondary = Teal600,
    onSecondary = Color.White,
    background = Sand100,
    onBackground = Charcoal900,
    surface = Color.White,
    onSurface = Charcoal900,
    surfaceVariant = Sand50,
    onSurfaceVariant = Charcoal700,
    outline = HairlineBorder
)

/**
 * SandSquircleTheme sets the MaterialTheme and automatically configures Android system bars
 * (Status Bar & Navigation Bar) to the warm Sand100 canvas with dark readable icons.
 */
@Composable
fun SandSquircleTheme(
    content: @Composable () -> Unit
) {
    val view = LocalView.current
    if (!view.isInEditMode) {
        SideEffect {
            val window = (view.context as? Activity)?.window
            if (window != null) {
                window.statusBarColor = Sand100.toArgb()
                window.navigationBarColor = Sand100.toArgb()
                val controller = WindowCompat.getInsetsController(window, view)
                controller.isAppearanceLightStatusBars = true
                controller.isAppearanceLightNavigationBars = true
            }
        }
    }

    MaterialTheme(
        colorScheme = SandSquircleColorScheme,
        typography = SandSquircleTypography,
        shapes = SandSquircleShapes,
        content = content
    )
}
