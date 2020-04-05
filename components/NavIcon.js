import "react-native-gesture-handler";
import * as React from "react";
import { Ionicons, SimpleLineIcons,AntDesign,FontAwesome ,Foundation, MaterialCommunityIcons ,Feather } from "@expo/vector-icons";
import styled from "styled-components";

export const HomeIcon = ({name,color}) => (
    <Foundation name="home" size={35} color={color}/>
)

export const SearchIcon = ({name,color,size}) => (
    <FontAwesome name="search" size={size} color={color}/>
)

export const AddIcon = ({name,color}) => (
    <FontAwesome name="plus-square-o" size={40} color={color}/>
)

export const NotificationIcon = ({name,style,color}) => (
    <Ionicons name={name} size={40} color={color} style={style}/>
)

export const ProfileIcon = ({name,color}) => (
    <Feather name="user" size={40} color={color}/>
)

export const LogoIcon = ({name,color}) => (
    <AntDesign name="instagram" color={"#8a3ab9"} size={40}/>
)

export const MessegeIcon = ({name,color}) => (
    <SimpleLineIcons name="paper-plane" size={32} color={color}/>
)

export const HeartIcon = ({name,style,color}) => (
    <Ionicons name={name} size={35} color={color} style={style}/>
)

export const CommentIcon = ({name,style,size}) => (
    <SimpleLineIcons name="bubble" size={size} color="black" style={style}/>
)

export const BackArrowIcon = ({size,color,style}) => (
    <Feather name="arrow-left" size={size} color={color} style={style} />
)