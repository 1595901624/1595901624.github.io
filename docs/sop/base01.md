---
description: 近几年来Rust这门语言越来越流行，我相信大部分有开发经验的“攻城狮”和“程序猿”们都有所耳闻。假如你之前没有听过那也没关系，咱们一起来学习它。如果你有Java，Kotlin，Python，Go，C++， JavaScript，C#等高级语言的编程经验，那学习Rust应该比较容易哦~即使没有任何编程经验，依然也可以学习哟，因为可以不受任何语言的影响去了解一门编程语言，我感觉也是比较容易上手的。
title: 🔧 RUST基础 01 Hello World
readingTime: false
tag:
 - Rust 基础教程
# recommend: 3
top: 1
sticky: 2
---

# RUST学习日记 01 Hello World

## 0x00 写在前面

近几年来Rust这门语言越来越流行，我相信大部分有开发经验的“攻城狮”和“程序猿”们都有所耳闻。假如你之前没有听过那也没关系，咱们一起来学习它。如果你有Java，Kotlin，Python，Go，C++， JavaScript，C#等高级语言的编程经验，那学习Rust应该比较容易哦~即使没有任何编程经验，依然也可以学习哟，因为可以不受任何语言的影响去了解一门编程语言，我感觉也是比较容易上手的。

## 0x01 什么是Rust

Rust语言的出生日期是在 2006 年，其本来是Mozilla员工 Graydon Hoare大神的私人项目，在2010年开始对外公布了。之后Hoare大神离开了Mozilla，大家如果想进一步了解 Hoare大神，可以百度一下。这里也有他离开Mozilla的一个解释——[[strcat\] : rust (slash-r-slash-rust.github.io)](http://slash-r-slash-rust.github.io/archived/2u1dme.html#co4uurq)

话题转回来，Rust语言突然流行起来，肯定有它的优势。Rust语言具有内存安全，内存管理，所有权，类型多态等优势。简单介绍下，Rust语言不会出现内存访问的错误，为了保证内存安全，建立了严格的内存管理模型——所有权系统和类型系统。通过严格的编译器来检查代码中的每个变量和引用的每个内存指针，为所有的变量建立了清晰的生命周期。如果变量超出生命周期，变量将会自动被释放，因此其并不像Java那样需要垃圾回收机制。其中，每一个被分配的内存都有一个独占其所有权的指针。当时该指针被销毁时，相应的指针对应的内存才会被释放掉。

## 0x02 搭建Rust环境

声明：本文所有的操作都在`Widnows 10`系统上操作。本人买不起水果本~~~

`Windows`操作系统上搭建环境还是比较简单的

1.官网下载安装包

[Install Rust - Rust Programming Language (rust-lang.org)](https://www.rust-lang.org/tools/install)

根据自己操作系统选择32位或者64位安装包即可。

2.**安装Visual Studio (必须)** 

**安装Visual Studio (必须)**

**安装Visual Studio (必须)**

Rust编译需要使用MSVC Build Tools，没有单独的安装包，最简单的方法就是安装Visual Studio咯

如果你不从事C#相关的开发，我这里建议安装 `Visual Studio 2013`就可以了。下面是下载地址。

```xml
Visual Studio Ultimate 2013 (x86) - DVD (Chinese-Simplified) 
文件名:cn_visual_studio_ultimate_2013_x86_dvd_3175316.iso
SHA1:D6029A90916AA49F3F8F260C277DAF838DDA0612
文件大小:2.87GB
发布时间:2013-11-08
电驴:ed2k://|file|cn_visual_studio_ultimate_2013_x86_dvd_3175316.iso|3077509120|ADDA34B2BC29E1571276AE50A220EB91|/
```

3.命令行输入`rustc`回车，出现下面的提示，即表明安装完成Rust了。

![rustc执行命令](https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/rustc%E5%91%BD%E4%BB%A4.png)

## 0x03 Hello World

是不是等这一刻很久了，开始手撸Hello World，毕竟这是学习每一门语言的第一步~

![hello world](https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/create_helloworld.png)

随便创建一个文件夹，创建一个文件`main.rs`，编写上图的代码。

```rust
fn main() {
   println!("hello world~~");
}
```

然后使用`rustc`编译这个文件。

注：如果这里你编译报了下面图片所示的错误，那么你肯定没有装Visual Studio~

![编译错误](https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/build_error.png)

编译成功后，会在目录下多出两个文件。

![编译成功](https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/build_success.png)

快点击 `main.exe`运行看下...发生了什么，一闪而过。原因是程序执行太快，瞬间结束了，咱们加入下面的代码，让程序暂停~

```rust
use std::process::Command;

fn main() {
   println!("hello world~~");

   // 命令提示符 pause
   let _ = Command::new("cmd.exe").arg("/c").arg("pause").status();	
}
```

再重新编译，运行！成功了！！这是咱们写的第一个Rust程序。

![运行](https://gitee.com/haoyu3/photo_gallery/raw/master/rust/001/run.png)

## 0x04 小结

咱们初步认识了Rust，也写了第一个程序—— Hello World。咱们可能不明白它的语法，但是已经运行了起来。没关系咱们后续的文章会详细介绍。通过`Hello World`程序，咱们也知道了`Rust`语言在计算机中打印信息的方法，是不是与C语言，Java，Kotlin很像呢？还有，咱们在搭建环境的时候必须要安装`Visual Studio`的原因是什么呢？有没有什么方法能跟`Go`语言那样，可以不安装Visual Studio就运行`Rust`呢？答案是有的，大家可以百度下，我在这里就不多介绍了呢？下节预告——Rust是否有其它的构建工具和包管理工具呢？

## 0x05 官方文档及其他资料(免费)

* [学习 Rust - Rust 程序设计语言 (rust-lang.org)](https://www.rust-lang.org/zh-CN/learn)
* [Rust 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/rust/rust-tutorial.html)

## 0x06 本节源码

[Gitee](https://gitee.com/haoyu3/study-rust/tree/master/001)
[Github](https://github.com/1595901624/StudyRust/tree/master/001)