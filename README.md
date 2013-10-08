captcha-viewer
===========================================================

用于获取浙江大学教务网中验证码的信息，同时作为Clarkok在QSC的十一作业。

[浙江大学教务网](http://jwbinfosys.zju.edu.cn/)

其中index.html是一个demo，可以访问[这里](http://www.clarkok.com/captcha-viewer/)尝试（已知问题：chrome在访问时会产生跨域问题，请在启动chrome时添加参数--disable-web-security）

captcha_parse.js是一个nodejs模块，但因为死都装不上canvas（我会说我还把ubuntu搞挂了么= =），没有测试过。
