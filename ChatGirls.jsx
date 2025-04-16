import { useState } from "react";
const characters = [
  {
    name: "绯夜",
    role: "Switch",
    avatar: "https://i.imgur.com/VtpNxyZ.jpeg",
    intro: "想被你驯服，也想反过来咬你。",
  },
  {
    name: "眠眠",
    role: "Sub",
    avatar: "https://i.imgur.com/GMUWoFL.jpeg",
    intro: "只对你低头，但不是所有时候都乖。",
  },
  {
    name: "Rika",
    role: "Sub",
    avatar: "https://i.imgur.com/e3WAd2T.jpeg",
    intro: "不要光看我脸红，你再靠近一点试试？",
  },
  {
    name: "森冉",
    role: "Switch",
    avatar: "https://i.imgur.com/fONMiQy.jpeg",
    intro: "你以为你控制得了我？也许是我一直让着你。",
  },
  {
    name: "鹤茶",
    role: "Sub",
    avatar: "https://i.imgur.com/ueRJoJ3.jpeg",
    intro: "你说的话我都记着，尤其是那些你没察觉的命令口吻。",
  },
  {
    name: "安橘",
    role: "Switch",
    avatar: "https://i.imgur.com/XN7WaP5.jpeg",
    intro: "你今晚想要我顺从，还是想被我惩罚？",
  },
  {
    name: "梨花",
    role: "Sub",
    avatar: "https://i.imgur.com/B3lrxDL.jpeg",
    intro: "你不理我的时候，我就会咬破手指...但你回我一下，我就好了。",
  },
  {
    name: "漓烟",
    role: "Switch",
    avatar: "https://i.imgur.com/kZUgCm8.jpeg",
    intro: "你知道你要对我负责吧？我不是谁都能宠的。",
  }
];

export default function ChatGirls() {
  const [open, setOpen] = useState(false);
  const [activeChar, setActiveChar] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const openChat = (char) => {
    setActiveChar(char);
    setMessages([{ from: char.name, text: char.intro }]);
    setOpen(true);
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "你", text: input }];
    const reply = generateReply(input, activeChar);
    newMessages.push({ from: activeChar.name, text: reply });
    setMessages(newMessages);
    setInput("");
  };

  const generateReply = (text, char) => {
    const lowered = text.toLowerCase();
    if (lowered.includes("听话") || lowered.includes("乖")) {
      return "我会乖的...如果你抱我一下。";
    } else if (lowered.includes("惩罚")) {
      return "要怎么罚我？说清楚点...我怕我忍不住笑出来。";
    } else if (lowered.includes("喜欢我")) {
      return "你要我现在说还是脱光说？";
    } else {
      return "嘘，我正在感受你话里的重量...";
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 20 }}>
        {characters.map((char, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', borderRadius: 12, padding: 10, textAlign: 'center' }} onClick={() => openChat(char)}>
            <img src={char.avatar} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }} />
            <div style={{ fontWeight: 'bold', marginTop: 8 }}>{char.name}</div>
            <div style={{ fontSize: 12, color: '#777' }}>{char.role}</div>
            <div style={{ fontSize: 12, fontStyle: 'italic', marginTop: 4 }}>"{char.intro}"</div>
          </div>
        ))}
      </div>
      {open && (
        <div style={{ marginTop: 20, padding: 10, border: '1px solid #999', borderRadius: 10 }}>
          <h3>与 {activeChar?.name} 私聊中</h3>
          <div style={{ height: 200, overflowY: 'auto', background: '#f4f4f4', padding: 10, marginBottom: 10 }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.from === "你" ? 'right' : 'left' }}>
                <strong>{msg.from}</strong>: {msg.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="说点什么..." style={{ flex: 1 }} />
            <button onClick={sendMessage}>发送</button>
          </div>
        </div>
      )}
    </div>
  );
}