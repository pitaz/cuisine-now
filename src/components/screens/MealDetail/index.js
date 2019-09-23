import React, { PureComponent } from 'react';
import { View, Text, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { Rating, Icon, Card, Button, Input } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { styles } from './styles';


class MealDetail extends PureComponent {
	state = {
		index: 0,
		routes: [
			{ key: 'first', title: 'Overview' },
			{ key: 'second', title: 'Reviews' },
		],
	};

	FirstRoute() {

		return <View style={[styles.scene]} />;
	}
	SecondRoute() {
		return <View style={[styles.scene,]} />;
	}

	render() {
		return (
			<View style={styles.contentContainer}>
				<ScrollView>
					<Card>
						<ImageBackground
							source={{ uri: 'https://res.cloudinary.com/doibwtx2d/image/upload/v1566823453/images/cuisine/appetizer-chopsticks-cuisine-923181_g5ml1h.jpg'}}
							style={styles.image}
						>
							<View style={styles.iconColumnContainer}>
								<View style={styles.iconRow}>
									<Icon
										raised
										name='ios-heart-empty'
										type='ionicon'
										color='#F93963'
										style={styles.iconStyle}
									/>
								</View>
							</View>
						</ImageBackground>
						<View style={styles.mealnameExtras}>
							<View style={styles.mealnameExtrasContent}>
								<Text style={styles.mealName}>Meal Detail</Text>
								<Text style={styles.mealRestaurant}>Restauarant name</Text>
								<Rating
									startingValue={4.0}
									imageSize={15}
									style={styles.ratings}
								/>
								<View style={styles.productCountContainer}>
									<View>
										<Text style={styles.countActionButton}>+</Text>
									</View>
									<Input
										placeholder='1'
										inputStyle={styles.input}
										containerStyle={styles.inputContainer}
									/>
									<View>
										<Text style={styles.countActionButton}>-</Text>
									</View>
								</View>
							</View>
							<View style={{
								justifyContent: 'flex-end'
							}}>
								<Text style={styles.price}>$ 32.99</Text>
							</View>
						</View>
						<Text style={styles.mealDetail}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
						</Text>

						<TabView
							navigationState={this.state}
							renderScene={SceneMap({
								first: this.FirstRoute,
								second: this.SecondRoute,
							})}
							onIndexChange={index => this.setState({ index })}
							initialLayout={{ width: Dimensions.get('window').width }}
							renderTabBar={props =>
								<TabBar
									{...props}
									indicatorStyle={styles.tabIndicator}
									style={styles.tabStyle}
									labelStyle={styles.tabLabel}
								/>
							}
						/>
					</Card>
				</ScrollView>
				<View style={styles.buttonContainer}>
					<Button
						buttonStyle={styles.button}
						title="ADD TO CART"
					/>
				</View>
			</View>
		);
	}
}


export default MealDetail;
