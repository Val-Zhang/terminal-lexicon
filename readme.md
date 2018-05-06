# terminal-lexicon

> 几乎每天都需要看英文文档，经常需要查单词，每次打开词典，输入后查词，感觉效率太低，而终端其实算是桌面上始终打开着的程序，由此有了此在终端中查单词的程序。

## 安装

本程序需要全局安装。

### 使用 yarn

```bash
yarn global add terminal-lexicon
```

### 使用 npm

```bash
npm install terminal-lexicon -g
```

## 使用

安装成功后，使用`dict <word>`即可查询单词`word`:

如：

```bash
dict node
node：
🎧 音标：
     英  [nəʊd]     美  [noʊd]
🌈 释义：
     n. 节, 结节, 瘤, (戏剧情节的)曲折或纠纷
     [计算机] 节点
```

## 开发计划

- [x] 基于扇贝api的简单释义
- [ ] 添加英文释义
- [ ] 添加某单词计算机专业释义
- [ ] 添加对词组的支持
- [ ] 离线词库
- [ ] 添加代码测试

> 如果你有什么好建议，欢迎在issure中提出，我们一起把这个词典做好