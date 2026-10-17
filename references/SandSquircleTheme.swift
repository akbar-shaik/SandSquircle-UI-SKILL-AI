import SwiftUI

// ============================================================================
// SandSquircle UI — iOS Native SwiftUI Design System Theme
// Warm Sand & Charcoal Soft-Squircle Daylight Aesthetic
// ============================================================================

public enum SandSquircle {
    // ------------------------------------------------------------------------
    // Color Tokens
    // ------------------------------------------------------------------------
    public struct Colors {
        // Sand Canvas Palette
        public static let sand50  = Color(red: 251/255, green: 249/255, blue: 246/255)
        public static let sand100 = Color(red: 248/255, green: 246/255, blue: 242/255) // Primary Canvas
        public static let sand200 = Color(red: 244/255, green: 239/255, blue: 234/255) // Card Dividers / Tracks
        public static let sand300 = Color(red: 234/255, green: 226/255, blue: 216/255) // Subtle Borders
        public static let sand400 = Color(red: 216/255, green: 205/255, blue: 192/255) // Hairline Borders

        // Charcoal Ink Palette
        public static let charcoal900 = Color(red: 17/255, green: 24/255, blue: 39/255) // Primary Typography, FAB
        public static let charcoal800 = Color(red: 31/255, green: 41/255, blue: 55/255)
        public static let charcoal700 = Color(red: 55/255, green: 65/255, blue: 81/255)
        public static let charcoal500 = Color(red: 107/255, green: 114/255, blue: 128/255) // Subtitles & Inactive
        public static let charcoal400 = Color(red: 156/255, green: 163/255, blue: 175/255)
        public static let charcoal200 = Color(red: 229/255, green: 231/255, blue: 235/255)
        public static let charcoal100 = Color(red: 243/255, green: 244/255, blue: 246/255)

        // Brand Teal Accents
        public static let teal700 = Color(red: 15/255, green: 118/255, blue: 110/255)
        public static let teal600 = Color(red: 13/255, green: 148/255, blue: 136/255) // Active Navigation
        public static let teal50  = Color(red: 240/255, green: 253/255, blue: 250/255) // Active Tab Background

        // Semantic Status Pills
        public static let emeraldMintText   = Color(red: 16/255, green: 185/255, blue: 129/255)
        public static let emeraldMintBg     = Color(red: 236/255, green: 253/255, blue: 245/255)
        public static let emeraldMintBorder = Color(red: 209/255, green: 250/255, blue: 229/255)

        public static let crimsonCoralText   = Color(red: 239/255, green: 68/255, blue: 68/255)
        public static let crimsonCoralBg     = Color(red: 254/255, green: 242/255, blue: 242/255)
        public static let crimsonCoralBorder = Color(red: 254/255, green: 226/255, blue: 226/255)

        public static let amberSandText   = Color(red: 245/255, green: 158/255, blue: 11/255)
        public static let amberSandBg     = Color(red: 255/255, green: 251/255, blue: 235/255)
        public static let amberSandBorder = Color(red: 254/255, green: 243/255, blue: 199/255)

        public static let hairline = Color.black.opacity(0.035)
    }

    // ------------------------------------------------------------------------
    // Corner Radius Constants (Continuous Squircles)
    // ------------------------------------------------------------------------
    public struct Radii {
        public static let modal: CGFloat    = 32
        public static let darkHero: CGFloat = 28
        public static let card: CGFloat     = 26
        public static let miniCard: CGFloat = 22
        public static let row: CGFloat      = 16
        public static let chip: CGFloat     = 12
    }
}

// ----------------------------------------------------------------------------
// Custom SwiftUI ViewModifiers
// ----------------------------------------------------------------------------

/// Applies the signature SandSquircle ultra-diffused elevation, 26pt continuous squircle,
/// pure white fill, and subtle hairline border.
public struct SandSquircleCardModifier: ViewModifier {
    var cornerRadius: CGFloat = SandSquircle.Radii.card

    public func body(content: Content) -> some View {
        content
            .background(Color.white)
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                    .stroke(SandSquircle.Colors.hairline, lineWidth: 1)
            )
            .shadow(color: Color.black.opacity(0.04), radius: 15, x: 0, y: 8)
    }
}

/// Applies the signature SandSquircle dark hero gradient card treatment.
public struct SandSquircleDarkCardModifier: ViewModifier {
    var cornerRadius: CGFloat = SandSquircle.Radii.darkHero

    public func body(content: Content) -> some View {
        content
            .background(
                LinearGradient(
                    gradient: Gradient(colors: [
                        SandSquircle.Colors.charcoal900,
                        SandSquircle.Colors.charcoal800
                    ]),
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            )
            .clipShape(RoundedRectangle(cornerRadius: cornerRadius, style: .continuous))
            .overlay(
                RoundedRectangle(cornerRadius: cornerRadius, style: .continuous)
                    .stroke(Color.white.opacity(0.08), lineWidth: 1)
            )
            .shadow(color: SandSquircle.Colors.charcoal900.opacity(0.25), radius: 20, x: 0, y: 12)
    }
}

/// Tactile spring scale-down effect for touch feedback (0.96 scale).
public struct SandSquirclePressStyle: ButtonStyle {
    public func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .scaleEffect(configuration.isPressed ? 0.96 : 1.0)
            .animation(.spring(response: 0.25, dampingFraction: 0.65), value: configuration.isPressed)
    }
}

// ----------------------------------------------------------------------------
// View Extensions
// ----------------------------------------------------------------------------
public extension View {
    func sandSquircleCard(cornerRadius: CGFloat = SandSquircle.Radii.card) -> some View {
        modifier(SandSquircleCardModifier(cornerRadius: cornerRadius))
    }

    func sandSquircleDarkCard(cornerRadius: CGFloat = SandSquircle.Radii.darkHero) -> some View {
        modifier(SandSquircleDarkCardModifier(cornerRadius: cornerRadius))
    }

    func sandSquircleCanvas() -> some View {
        self.background(SandSquircle.Colors.sand100.ignoresSafeArea())
    }
}

// ----------------------------------------------------------------------------
// Example Reusable SwiftUI Component: Status Badge
// ----------------------------------------------------------------------------
public struct SandSquircleStatusBadge: View {
    public enum Status {
        case paid
        case overdue
        case pending
    }

    public let status: Status
    public let text: String

    public var body: some View {
        HStack(spacing: 5) {
            Circle()
                .fill(dotColor)
                .frame(width: 6, height: 6)
            Text(text)
                .font(.system(size: 11, weight: .bold))
                .foregroundColor(textColor)
        }
        .padding(.horizontal, 10)
        .padding(.vertical, 4)
        .background(bgColor)
        .clipShape(Capsule())
        .overlay(Capsule().stroke(borderColor, lineWidth: 1))
    }

    private var textColor: Color {
        switch status {
        case .paid: return SandSquircle.Colors.emeraldMintText
        case .overdue: return SandSquircle.Colors.crimsonCoralText
        case .pending: return SandSquircle.Colors.amberSandText
        }
    }

    private var dotColor: Color { textColor }

    private var bgColor: Color {
        switch status {
        case .paid: return SandSquircle.Colors.emeraldMintBg
        case .overdue: return SandSquircle.Colors.crimsonCoralBg
        case .pending: return SandSquircle.Colors.amberSandBg
        }
    }

    private var borderColor: Color {
        switch status {
        case .paid: return SandSquircle.Colors.emeraldMintBorder
        case .overdue: return SandSquircle.Colors.crimsonCoralBorder
        case .pending: return SandSquircle.Colors.amberSandBorder
        }
    }
}
