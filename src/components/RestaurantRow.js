import React from 'react';
import { View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from '../components/common';

const RestaurantRow = (props) => {
	const { menu, location, image} = props.menu;
	return (
		<View style={{ 
			flexDirection: 'row',
			margin: 2
		}}>
			<Card cardStyle={{ 
				flex: 1,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.1,
				shadowRadius: 2,
				elevation: 5,
				backgroundColor: 'white'}}>
				<View style={{flexDirection: 'row', padding: 5}}>
					<Image source={{ uri: image}} style={{ width: 100, height: 100, borderRadius: 6, padding: 10}} />
					<View style={{marginLeft: 10}}>
						<View style={{ alignContent: 'space-around', flexDirection: 'row', justifyContent: 'space-around' }}>
							<Text style={{ padding: 2, width: 160, fontSize: 16, fontWeight: '400', fontFamily: 'Raleway-Black', color: '#26315F'}}>{menu}</Text>
							<Icon
								containerStyle={{ marginLeft: 28}}
								name='bookmark'
								type='feather' 
								color='#C7CAD1'
								iconStyle={{ fontSize: 25, fontWeight: '100'}}
							/>
						</View>
						<View style={{padding: 2, flexDirection: 'row'}}>
							<Icon
								name='map-pin'
								type='feather' 
								color='#6b778d'
								iconStyle={{ fontSize: 12, padding: 3}}
							/>
							<Text style={{ fontSize: 12, padding: 3, color: '#C7CAD1'}}>{location}</Text>
						</View>
						<View style={{ flexDirection: 'row', padding: 2}}>
							<Icon
								name='star'
								type='ionicons' 
								color='#6b778d'
								iconStyle={{ fontSize: 16, color: '#f7b71d'}}
							/>
							<Text style={{ fontSize: 12, padding: 3}}>4.9 <Text style={{ color: '#C7CAD1'}}>(120 rating)</Text></Text>
							<View style={{ borderRadius: 25, backgroundColor: '#F93963', marginLeft: 20 }}>
								<Text style={{fontSize: 10, padding: 3, color: 'white'}}>free delivery</Text>
							</View>
						</View>
					</View>
				</View>
			</Card>
		</View>
	); 
};

export default RestaurantRow;
