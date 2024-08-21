import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { UserOutlined,LockOutlined } from "@ant-design/icons";
import {
  DiscordOutlined,
  Html5Outlined,
  TaobaoCircleOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  WechatOutlined,
  GooglePlusOutlined,
  InstagramOutlined,
  XOutlined,
  TikTokOutlined,
  TwitchOutlined,
  PythonOutlined,
  DockerOutlined,
  AmazonOutlined,
  AntCloudOutlined,
  AntDesignOutlined,
  WhatsAppOutlined,
  WeiboOutlined,
  WindowsOutlined,
  AndroidOutlined,
} from "@ant-design/icons";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook for routing

  const checkBoxInputs = [
    { id: 1, label: "Admin", value: "admin" },
    { id: 2, label: "Intern", value: "intern" },
  ];

  const [checkedValue, setCheckedValue] = useState();

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setCheckedValue(e.target.value);
      setRoles(e.target.value);
    } else {
      setCheckedValue(null);
      setRoles("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ name: username, password, role: roles, loggedIn: true }));

    // Redirect based on role
    if (roles === "admin") {
      navigate("/admin-home"); // Route to AdminHomePage
    } else if (roles === "intern") {
      navigate("/home"); // Route to HomePage
    }
  };

  return (
    <div>
      <div className="background-image">
        <section>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
          <div className="row">
            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>

            <div className="div-icon">
              <DiscordOutlined className="i" />
              <Html5Outlined className="i" />
              <TaobaoCircleOutlined className="i" />
              <TwitterOutlined className="i" />
              <YoutubeOutlined className="i" />
              <WechatOutlined className="i" />
              <GooglePlusOutlined className="i" />
              <InstagramOutlined className="i" />
              <XOutlined className="i" />
              <TikTokOutlined className="i" />
              <TwitchOutlined className="i" />
              <PythonOutlined className="i" />
              <DockerOutlined className="i" />
              <AmazonOutlined className="i" />
              <AntCloudOutlined className="i" />
              <AntDesignOutlined className="i" />
              <WhatsAppOutlined className="i" />
              <WeiboOutlined className="i" />
              <WindowsOutlined className="i" />
              <AndroidOutlined className="i" />
            </div>
          </div>
        </section>
      </div>
      <div className="wrapper">
        <form className="form-group custom-form" onSubmit={handleSubmit}>
          <h1 className="underline">Sign In</h1>
          <div className="checkbox-group">
            {checkBoxInputs.map((role, index) => (
              <div className="checkbox" key={index}>
                <label className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    className="checkbox-input"
                    id={role.value}
                    name="roles"
                    value={role.value}
                    checked={role.value === checkedValue}
                    onChange={handleCheckboxChange}
                    required={checkedValue ? false : true}
                  />
                  <span className="checkbox-tile">
                    <span className="checkbox-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 101 101"
                        id="user"
                      >
                        <path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path>
                      </svg>
                    </span>
                    <span className="checkbox-label">{role.label}</span>
                  </span>
                </label>
              </div>
            ))}
          </div>

          <label>USERNAME</label>
          <div className="input-container">
            <input
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
              placeholder="Username"
            />
            <UserOutlined className="icon" />
          </div>

          <label>PASSWORD</label>
          <div className="input-container">
            <input
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Password"
            />
            <LockOutlined className="icon" />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
