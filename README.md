# Portfolio

#### Technical Skills: C++, Python, Pytorch, Node.js, Express, Java 

## Education
- M.S., Mathmatics | Yonsei University 2019.09 - 2021.08	 			        		
- B.S., Mathmatics | Incheon University 2014.03 - 2019.08

### Course 
- 정보시스템 구축 보안엔지니어 양성 B (메가스터디아이티(IT)아카데미학원) 2021.07 - 2021.09 
- 씹어먹는 C++ (modoocode.com) 2021.09 - 2021.11
- [풀스택] 유튜브 클론코딩 (nomadcoders.co) 2024.08 - 2024.10 

## Certificates
- CCNA (Cisco Systems) 2021.11
- RHCSA (Redhat) 2022.07

## Projects 

### Character-Based Handwritten Text Transcription with Attention Networks
- period 2025.04 - 2025.04
- [colab script](files:///main/src/SIMPLE_HTR_colab_version.ipynb)

<a id="raw-url1" href="https://raw.githubusercontent.com/cirbee/cirbee.github.io/master/src/SIMPLE_HTR_colab_version.ipynb", colab_script</a>

![poster](./src/atten_graph.png)

![poster](./src/attenion_endcoder_decoder.png)

References
- [Paper : attention-networks-for-image-to-text](https://paperswithcode.com/paper/attention-networks-for-image-to-text)
- [Code](https://github.com/jvpoulos/Attention-OCR)

loaded on [github](https://github.com/cirbee/SIMPLE) 

### Best Practices for a Handwritten Text Recognition System
- period 2024.06 - 2024.09
- rebuild 2025.04
- [colab script](files:///main/src/Character-Based Handwritten_version2.ipynb)

<a id="raw-url2" href="https://raw.githubusercontent.com/cirbee/cirbee.github.io/master/src/Character-Based Handwritten_version2.ipynb", colab_script</a>

![poster](./src/CTCloss_graph.png)

References
- [Paper : best-practices-for-a-handwritten-text](https://paperswithcode.com/paper/best-practices-for-a-handwritten-text)
- [Paper : Are Multidimensional Recurrent Layers Really Necessary for Handwritten Text Recognition?](https://ieeexplore.ieee.org/document/8269951)
- [Code](https://github.com/georgeretsi/HTR-best-practices/)

loaded on [github](https://github.com/cirbee/SIMPLE)


### Seminar
- FHE School 2025.01 - 2025.02
- 서울대 암호학 연구실, 크립토랩 CKKS 모듈 연구 
- [CKKS paper](https://eprint.iacr.org/2016/421.pdf)
- [PIR paper](https://eprint.iacr.org/2017/1142)

FHE 암호 모듈에 대한 기본적인 사항들을 배우고, 이를 바탕으로 연구주제를 정하여 기능 구현을 목표로한 세미나 입니다. 서울대 암호학 연구실에서 개발한 CKKS 모듈을 중점적으로 배우고, FHE 구현을 위한 기능들을 학습했습니다. 이를 바탕으로 FHE 연구주제를 정해, CKKS 기반한 기능 구현, 테스트 하였습니다. 

##### FHE(Fully Homeomorphic Encryption) 
데이터들을 암호화한 상태에서 연산 가능한 암호모듈을 통칭합니다. 완전히 신뢰하지 못하는 server(cloud data server ...)에 데이터를 저장하고 참조할 때 데이터 유출없이 사용가능하게 하는 암호무듈 기술를 의미합니다. 기본적인 사칙연산과 relu function, regression 등을 지원하여, AI, deep learning 학습에 암호화된 데이터를 사용 가능합니다.  

기본 기능 : KeySwitch, Rescaling, Bootstrap, FFT(Fast Fourier Transform), DTT(Discrete Fourier Transform), NTT(Number Theoretic Transform)
바탕 지식: number theory, abstract algebra, cyclotomic field, homeomorphic

##### 세부연구
PIR(Private information retrieval) 연구주제로 잡았습니다. client 가 server에 어떤한 정보를 참조, 요청하는 것을 숨기는 기능을 의미합니다. 기존 CKKS 모듈의 경우 PIR 기능이 없었지만, 세부연구를 진행하면서 CKKS 모듈에 적용가능한 PIR 기본 기술(query compression)을 구현했습니다. 

