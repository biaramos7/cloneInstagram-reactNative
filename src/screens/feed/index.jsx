import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'

import styles from './styles';
import options from '../../assets/options.png';
import comment from '../../assets/comment.png';
import like from '../../assets/like.png';
import save from '../../assets/save.png';
import send from '../../assets/send.png';

export const Feed = () => {

    const posts = [
        {
            id: 1,
            author: 'netflixbrasil',
            user_picture: 'https://gkpb.com.br/wp-content/uploads/2016/06/novo-icone-identidade-visual-logo-netflix-blog-gkpb.jpg',
            url: 'https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/stranger-things-4-novo-cartaz-netflix-1-1.jpg',
            likes: '9854',
            description: 'Ninguém está preparado pro que vem aí! O vol. 2 da temporada 4 de Stranger Things chega dia 1 de julho.',
            hashtag: '#strangerthings #vecna',
            place: 'Hawkings'
        },
        {
            id: 2,
            author: 'netflixbrasil',
            user_picture: 'https://gkpb.com.br/wp-content/uploads/2016/06/novo-icone-identidade-visual-logo-netflix-blog-gkpb.jpg',
            url: 'https://seuladogeek.com.br/wp-content/uploads/2022/03/O-Projeto-Adam-filme-Netflix-768x1075.jpg',
            likes: '4587',
            description: 'Depois de viajar no tempo e ir parar em 2022 sem querer, o piloto de combate Adam Reed se une à sua versão de 12 anos de idade para salvar o futuro. Assista agora, só na Netflix!',
            hashtag: '#projetoadam #ryanreynolds',
            place: 'Tão tão distante'
        },
        {
            id: 3,
            author: 'netflixbrasil',
            user_picture: 'https://gkpb.com.br/wp-content/uploads/2016/06/novo-icone-identidade-visual-logo-netflix-blog-gkpb.jpg',
            url: 'https://pbs.twimg.com/media/FL7MpKuWQAMovlZ.jpg',
            likes: '7512',
            description: 'É isso mesmo, Projeto Gemini acaba de entrar no nosso catálogo! Não perca tempo e venha assistir o filme já garantiu um assento no famoso Top 10 da plataforma.',
            hashtag: '#projetogemini #willsmith',
            place: 'América'
        }
    ]

    function renderItem({ item: post }) {
        return (
            <View>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Image style={styles.userPicture}
                            source={{ uri: post.user_picture }} />

                        <View>
                            <Text style={styles.author}>  {post.author}</Text>
                            <Text style={styles.place}>  {post.place}</Text>
                        </View> 
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={options} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View>
                        <Image style={styles.picture}
                            source={{ uri: post.url }} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <View style={styles.actions}>
                        <View style={styles.leftActions}>
                            <TouchableOpacity style={styles.action}>
                                <Image source={like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={comment} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={send} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.action}>
                                <Image source={save} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View >
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text>
                            <Text style={{ fontWeight: 'bold' }}>{post.author} </Text>
                            <Text style={styles.description}>{post.description}</Text>
                        </Text>
                        <Text style={styles.hashtag}>{post.hashtag}</Text>
                    </View>

                </View>
            </View>
        )
    };

    return (
        <View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}