import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon} from 'react-native-elements';

const Notifications = () => {
	return (
		<View style={{flex: 1, backgroundColor: '#C7CAD1'}}>
			<View style={{backgroundColor: 'white', flex: 1, marginBottom: 20}}>
				<Text style={{padding: 10, fontSize: 14}}>CATEGORIES</Text>
      
				<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
					<View style={{ flexDirection: 'row', padding: 10}}>
						<Icon
							name='tags'
							type='font-awesome'
							onPress={() => console.log('hello')} 
							iconStyle={{padding: 10, marginRight: 5}}/>
						<Text style={{width: 250, padding: 5}}>Discount and sales Be the forst in line to nab thr stuff you love for less</Text>
					</View>
					<Icon
						name='toggle-on'
						type='font-awesome'
						color='#C7CAD1'
						onPress={() => console.log('hello')} 
						iconStyle={{padding: 15}}/>
				</View>
        
				<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
					<View style={{ flexDirection: 'row', padding: 10}}>
						<Icon
							name='ios-megaphone'
							type='ionicon'
							onPress={() => console.log('hello')} 
							iconStyle={{padding: 10, marginRight: 5}}/>
						<Text style={{width: 250, padding: 5}}>Discount and sales Be the forst in line to nab thr stuff you love for less</Text>
					</View>
					<Icon
						name='toggle-on'
						type='font-awesome'
						color='#C7CAD1'
						onPress={() => console.log('hello')} 
						iconStyle={{padding: 15}}/>
				</View>

				<View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
					<View style={{ flexDirection: 'row', padding: 10}}>
						<Icon
							name='box'
							type='feather'
							onPress={() => console.log('hello')} 
							iconStyle={{padding: 10, marginRight: 5}}/>
						<Text style={{width: 250, padding: 5}}>Discount and sales Be the forst in line to nab thr stuff you love for less</Text>
					</View>
					<Icon
						name='toggle-on'
						type='font-awesome'
						color='#C7CAD1'
						onPress={() => console.log('hello')} 
						iconStyle={{padding: 15}}/>
				</View>
			</View>
			<View style={{padding: 10}}>
				<Text style={{padding: 10, fontSize: 11}}>You can change your communications preferences, including emails and SMS, from My Account</Text>
				<Text style={{padding: 10, fontSize: 14}}>CONTACT PREFERENCES</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default Notifications;
