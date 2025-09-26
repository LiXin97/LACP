# LACP: LLM Agent Communication Protocol

[![Conference](https://img.shields.io/badge/NeurIPS%202025-AI4NextG%20Workshop-blue)](https://ai4nextg.github.io/)
[![Paper](https://img.shields.io/badge/Paper-PDF-red)](assets/LACP-teaser.pdf)
[![Website](https://img.shields.io/badge/Project-Website-green)](https://lixin97.github.io/LACP/)

**A Telecom-Inspired Protocol for AI Agent Interoperability in Next Generation Networks**

> 🚨 **Position Paper**: This work argues that the field of LLM agents requires urgent standardization through a unified, telecom-inspired communication protocol to ensure safety, interoperability, and scalability in NextG networks.

## 📋 Abstract

Current ad-hoc communication methods in LLM agents are creating a fragmented ecosystem, reminiscent of the early "protocol wars" in networking. This position paper proposes **LACP** (LLM-Agent Communication Protocol), a three-layer architecture inspired by telecommunications standards that ensures semantic clarity, transactional integrity, and built-in security for multi-agent systems.

## 🏗️ Architecture

LACP implements a **three-layer architecture** with mutually-insulated layers:

### 1️⃣ Semantic Layer
- **Purpose**: Conveys the *intent* of communication
- **Message Types**:
  - `PLAN` - Express high-level intent
  - `ACT` - Invoke external tools
  - `OBSERVE` - Return results/status

### 2️⃣ Transactional Layer
- **Purpose**: Ensures reliability and integrity
- **Features**:
  - Message signing with JSON Web Signatures (JWS)
  - Message sequencing for ordered delivery
  - Unique transaction IDs for idempotency
  - Two-phase commit for atomic operations

### 3️⃣ Transport Layer
- **Purpose**: Handles efficient and secure delivery
- **Protocols**: HTTP/2, QUIC, WebSockets
- **Features**: Binary encoding, transport-agnostic design

## 📊 Performance Metrics

- **3.5%** Latency overhead for complex messages
- **30%** Size overhead for realistic payloads
- **3** Layer modular architecture
- **10,000+** Messages tested across payload sizes

## 🔧 Key Contributions

1. **Risk Analysis**: Identification of systemic risks from fragmented agent communication
2. **Design Principles**: Guidelines for robust, interoperable protocols from telecom history
3. **Protocol Proposal**: LACP - a layered, secure, and extensible framework

## 🧪 Experimental Validation

### Performance Analysis
- Minimal latency impact on realistic agent interactions
- Overhead inversely proportional to message complexity
- Comprehensive testing across various payload sizes

### Interoperability Demo
- Successful LangChain ↔ Framework-agnostic tool communication
- Seamless integration without custom code
- Universal message format compatibility

### Security Validation
- ✅ Tampering attacks blocked by signature verification
- ✅ Replay attacks prevented by transaction ID tracking
- ✅ Application-layer security beyond TLS

## 🌐 Current Protocol Landscape

| Protocol | Transport | Authentication |
|----------|-----------|---------------|
| OpenAI Function Calling | JSON schema | API key only |
| LangChain Agent Protocol | REST API | HTTP/JWT only |
| Anthropic MCP | JSON-RPC/HTTP | OAuth 2.1 |
| IBM/LF ACP | JSON-RPC | Signed capability tokens |
| Google A2A | HTTP/Protobuf | Capability discovery |

## 📚 Telecommunications Insights

LACP draws from successful telecom standardization principles:

- **🤝 Consensus-Driven Standards**: Open collaboration prevents vendor lock-in
- **🔒 Security by Construction**: Security fundamental at every layer
- **📚 Layered Abstractions**: Independent component evolution
- **⚖️ Narrow Waist Design**: Stable core with extensible edges


## 📁 Project Structure

```
LACP/
├── index.html          # Main project website
├── css/
│   └── style.css       # Styling and responsive design
├── js/
│   └── script.js       # Interactive functionality
├── images/             # Architecture diagrams and figures
├── assets/             # PDF papers and documentation
└── README.md          # This file
```

## 👥 Authors

- **[Xin Li](https://lixin.ai/)** - Nanyang Technological University
- **[Mengbing Liu](https://liumengbing.com/)** - Nanyang Technological University
- **[Chau Yuen](https://blogs.ntu.edu.sg/chau-yuen/)** - Nanyang Technological University

## 📖 Citation

```bibtex
@inproceedings{li2025lacp,
    title={{LLM} Agent Communication Protocol ({LACP}) Requires Urgent Standardization: A Telecom-Inspired Protocol is Necessary},
    author={Xin Li and Mengbing Liu and Chau Yuen},
    booktitle={NeurIPS 2025 Workshop: AI and ML for Next-Generation Wireless Communications and Networking},
    year={2025},
    url={https://openreview.net/forum?id=LpwE9cSLkS}
}
```

## 🔗 Links

- **[Workshop Website](https://ai4nextg.github.io/)** - NeurIPS 2025 AI4NextG Workshop
- **[Project Website](https://lixin97.github.io/LACP/)** - Interactive demonstration
- **[Paper PDF](assets/NeurIPS_LACP_workshop.pdf)** - Full paper download

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues, feature requests, or pull requests.

## 📧 Contact

For questions or collaborations, please contact:
- Xin Li: xin019@e.ntu.edu.sg

---

<div align="center">
<strong>🚀 LACP: Building the Future of AI Agent Communication</strong><br>
<em>Standardization through Telecommunications Wisdom</em>
</div>