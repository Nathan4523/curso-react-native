import React, {Component} from 'react';
import {FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
    static navigationOptions = {
        title: 'JSHunt',
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    };

    /*o react só aceita variavel dentro do state, ele fica ouvindo e alterando conforme a
    * necessidade do dev
    */
    state = {
        productInfo: {},
        docs: [],
        page: 1
    }

    //quando criar a tela ele já aciona essa função
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async(page = 1) => {
        const response = await api.get(`/products?page=${page}`); 

        const { docs, ...productInfo } = response.data;

        this.setState({ docs: [...this.state.docs, ...docs], 
            productInfo, 
            page 
        });

        console.log(this.state.docs);
    }

    renderItem = ({item}) => (
        <View style={styles.productContainer}>
            <Text style={ styles.productTitle }>{ item.title }</Text>
            <Text style={ styles.productDescription } >{ item.description }</Text>

            <TouchableOpacity 
            style={ styles.productButton } 
            onPress={ () => {
                this.props.navigation.navigate("Product", { product: item });
            } }
            >
                <Text style={ styles.productButtonText } >Acessar</Text>
            </TouchableOpacity>
        </View>
    );

    loadMore = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    contentContainerStyle={styles.list}
                    data={this.state.docs} 
                    keyExtractor={item => item._id}
                    renderItem={ this.renderItem }
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
                
                
                {/* <Text>Titulo</Text> */}
                {/* {this.state.docs.map( (product) => ( <Text key={ product._id }>{ product.title }</Text>) )} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: "#fafafa",
     flex: 1
    },
    list: {
        padding: 20
    },  
    productContainer: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 24
    },
    productButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#da552f',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    productButtonText: {
        fontSize: 16,
        color: '#da552f',
        fontWeight: 'bold'
    }
  })