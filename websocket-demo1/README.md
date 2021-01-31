# websocket-demo1

# 聊天室

* 前端
  Home
  列表 / 消息输入框 / 发送按钮
  localstorage -> username / message / id / 消息时间 -> 后端 socket 服务
  open
  close
  error
  message

* 后端
  接收 -> 消息数据 -> 广播给所有连接到 socket 服务的客户端
  open
  close
  error
  connection
    message 接收客户端发送的消息数据 -> 广播

