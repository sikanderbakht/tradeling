import { Button, FlatList, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/products/productSlice";
import { useEffect, useState } from "react";

const HomeScreen = () => {
    const [text, setText] = useState('')
    const { productsResponse, isLoading } = useSelector((state: any) => state.product)
    const dispatch = useDispatch();


    useEffect(() => {
        console.log("response:" + JSON.stringify(productsResponse));
        
    }, [productsResponse]);


    
    const renderItem = ({ item }) => {
        return (
            <Text>
                {item.title}
            </Text>
        )
    }
    return (
        <View>
            <Text>
                Home Screen1 {text}
            </Text>

            <Button title="sdfs" onPress={() => {
                dispatch(fetchProducts());
            }} />

            <FlatList
                data={productsResponse}
                keyExtractor={(item) => item.id}
                renderItem={renderItem} />
        </View>
    )

};

export default HomeScreen;