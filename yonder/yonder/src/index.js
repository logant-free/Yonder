import React from 'react'; 
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'; 
// 1. Breakpoint Configuration (in dp units) 
const breakpoints = { 
	small: 576, // Typical large phones 
	medium: 768, // Small tablets 
	large: 992, // Standard tablets 
}; 
// 2. Get current window dimensions 
const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 
// 3. Responsive Layout Component 
const ResponsiveLayout = ({ children }) => { 
	const isSmall = windowWidth <= breakpoints.small; 
	const isMedium = windowWidth > breakpoints.small && windowWidth <= breakpoints.medium; 
	const isLarge = windowWidth > breakpoints.medium; 

	return ( 
		<View style={[ styles.container, isSmall && styles.smallContainer, isMedium && styles.mediumContainer, isLarge && styles.largeContainer, ]}> {children} <View>
		); 
		}; 

	const useScreenSize = () => { 
		const isSmall = windowWidth <= breakpoints.small; 
		const isMedium = windowWidth > breakpoints.small && windowWidth <= breakpoints.medium; 
		const isLarge = windowWidth > breakpoints.medium; 

		return { 
			isSmall, 
			isMedium, 
			isLarge, 
			currentBreakpoint: isSmall ? 'small' : isMedium ? 'medium' : 'large', 
				windowWidth, 
				windowHeight 
				}; 
			}; 
	// 5. Responsive Text Component 
	const ResponsiveText = ({ small, medium, large, style, ...props }) => { 
		const { isSmall, isMedium } = useScreenSize(); 
		const fontSize = isSmall ? small : isMedium ? medium : large; 
		return <Text style={[{ fontSize }, style]} {...props} />; }; 
		 /6. Responsive Image 
		const ResponsiveImage = ({ source, small, medium, large, style, ...props }) => { 
			const { isSmall, isMedium } = useScreenSize(); const dimensions = isSmall ? small : isMedium ? medium : large; 
		return ( <Image source={source} style={[dimensions, style]} {...props} /> ); }; 
		// 7. Responsive Value Helper 
		const responsiveValue = (values) => { if (windowWidth <= breakpoints.small) return values.small || values.default; if (windowWidth <= breakpoints.medium) return values.medium || values.default; return values.large || values.default; };
		 // 8. StyleSheet 
		 const styles = StyleSheet.create({ container: "{ flex: 1, padding: 16, backgroundColor: '#ffffff', }, smallContainer: { paddingHorizontal: 12, }, mediumContainer: { paddingHorizontal: 24, }, largeContainer: { paddingHorizontal: 32, }, })", 
		 // 9. Exports 
		 export { 
		 	ResponsiveLayout, 
		 	ResponsiveText, 
		 	ResponsiveImage, 
		 	useScreenSize, 
		 	breakpoints, 
		 	responsiveValue, 
		 	windowWidth, 
		 	windowHeight, 
		 };