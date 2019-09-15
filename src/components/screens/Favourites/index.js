import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Card } from '../../common';
import { favourites } from './fixtures';

const renderFavourites = (item, index) => (
	<Card key={index} cardStyle={styles.rowCardStyle}>
		<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>

			<View style={{ flexDirection: 'row'}}>
				<Image source={{ uri: 'https://res.cloudinary.com/doibwtx2d/image/upload/v1566823453/images/cuisine/appetizer-chopsticks-cuisine-923181_g5ml1h.jpg'}} 
					style={{ width: 80, margin: 0}}
				/>
				<View style={{ margin: 5}}>
					<Text style={{ 
						padding: 2, 
						fontSize: 18, 
						fontWeight: '400', 
						fontFamily: 'Raleway-Black',
						color: '#26315F'
					 }}>{item.name}</Text>
					<Text style={{ 
						fontSize: 14, 
						padding: 3, 
						color: '#C7CAD1'
					}}>{item.location}</Text>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
						<Text style={{ 	fontSize: 12, padding: 3}}>4.3<Text style={{ padding: 2, color: '#C7CAD1'}}>({item.rating} ratings)</Text></Text>
					</View>
					<Text style={{ padding: 3, fontWeight: '400', fontSize: 17}}>$ {item.price}</Text>
				</View>
			</View>

			<View style={{ margin: 15, justifyContent: 'space-between'}}>
				<Icon
					name='ios-heart'
					type='ionicon'
					color="#F93963"
				/>
			
			</View>
		</View>
	</Card>
);

const Favourites = () => {
	return (
		<ScrollView>
			<View style={{marginTop: 30, padding: 10}}>
				<Text style={{ fontSize: 20, fontWeight: '700', padding: 5, textAlign: 'center'}}>Favourites</Text>
				{
					favourites.map((item, index) => {
						return renderFavourites(item, index);
					})
				}
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rowCardStyle: {
		flex: 1,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 5,
		backgroundColor: 'white'
	},
});

export default Favourites;
