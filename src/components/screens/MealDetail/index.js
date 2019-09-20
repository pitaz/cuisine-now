import React, { useState, PureComponent } from 'react';
import { View, Text, ScrollView, ImageBackground, Dimensions, StatusBar, StyleSheet } from 'react-native';
import { Rating, Icon, Card, Button, Input } from 'react-native-elements';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


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
			<View style={{
				flex: 1,
				justifyContent: 'space-between',
				backgroundColor: '#F5F6F9',
				marginBottom: 20
			}}>
				<ScrollView>
					<View style={{
						flex: 1
					}}>
						<Card style={{
							margin: 0,
							padding: 0
						}}>
							<ImageBackground
								source={{ uri: 'https://res.cloudinary.com/doibwtx2d/image/upload/v1566823453/images/cuisine/appetizer-chopsticks-cuisine-923181_g5ml1h.jpg'}}
								style={{
									flex: 1,
									width: '100%',
									height: 250,
									marginTop: 0,
								}}
							>
								<View style={{
									flex: 1,
									width: '100%',
									justifyContent: 'flex-end',
									marginBottom: (-30)
								}}>
									<View style={{
										flexDirection: 'row',
										justifyContent: 'flex-end'
									}}>
										<Icon
											raised
											name='ios-heart-empty'
											type='ionicon'
											color='#F93963'
											style={{
												position: 'absolute'
											}}
											onPress={() => console.log('hello')} />
									</View>
								</View>
							</ImageBackground>
							<View style={{
								flexDirection: 'row'
							}}>
								<View style={{
									flex: 1,
									width: '100%',
									justifyContent: 'flex-end',
								}}>
									<Text style={{
										fontSize: 20,
										fontWeight: '500',
										padding: 5
									}}>Meal Detail</Text>
									<Text style={{
										fontSize: 16,
										fontWeight: '500',
										padding: 5
									}}>Restauarant name</Text>
									<Rating
										startingValue={4.0}
										imageSize={15}
										style={{ 
											justifyContent: 'flex-start',
											alignItems: 'flex-start',
											margin: 0,
											padding: 5
				 }}
									/>
									<View style={{ 
										flexDirection: 'row'
									}}>
										<View>
											<Text style={{
												padding: 3,
												fontSize: 18
											}}>+</Text>
										</View>
										<Input
											placeholder='1'
											inputStyle={{
												marginLeft: 20,
												marginRight: 20
											}}
											containerStyle={{
												width: '30%',
											}}
										/>
										<View>
											<Text style={{
												padding: 3,
												fontSize: 18
											}}>-</Text>
										</View>
									</View>
								</View>
								<View style={{
									justifyContent: 'flex-end'
								}}>
									<Text style={{
										fontSize: 20,
										fontWeight: '500',
										marginTop: 20,
										padding: 5
									}}>$ 32.99</Text>
								</View>
							</View>
							<Text style={{
								padding: 20
							}}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
							</Text>

							{
							// tabbed component
							}

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
										indicatorStyle={{ backgroundColor: 'black' }}
										style={{ backgroundColor: 'white', color: 'black' }}
										labelStyle={{
											color: 'black'
										}}
									/>
								}
							/>
						</Card>
					</View>
				</ScrollView>
				<View style={{
					padding: 20,
				}}>
					<Button
						buttonStyle={{
							backgroundColor: '#F93963'
						}}
						title="ADD TO CART"
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: StatusBar.currentHeight,
	},
	scene: {
		flex: 1,
		height: 200
	},
});

export default MealDetail;
