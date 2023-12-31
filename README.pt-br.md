<div align="center">
  <h1 align="center">
  iWeather
  </h1>
</div>

<p align="center">
<a href="https://github.com/gbdsantos/iweather/commits/master">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/gbdsantos/iweather.svg">
</a>

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/gbdsantos/iweather.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/gbdsantos/iweather.svg">

  <a href="https://github.com/gbdsantos/iweather/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/gbdsantos/iweather.svg">
  </a>
</p>

<div align="center" style="display: none; width: 90%;">
	<img alt="ignite fleet application demonstration" src="" />
</div>

<div align="center">
<h4 align="center">read on languages</h4>
<a href="https://github.com/gbdsantos/iweather/blob/master/README.pt-br.md" hreflang="pt-br">🇧🇷 portuguese (pt-br)
</a>
</div>

## 💡 Sobre

Projeto para aprender sobre **testes unitários**, **testes de integração** e **publicação de aplicativos** no React Native.

<br>

## ⚙️ Executar Projeto

```Bash
# Instalar dependências
npm install

# Executar
npx expo start

# Android
npx expo run:android
```

<br>

## Comandos

Wiki de comandos executados e bibliotecas utilizadas.

- **Dependências**

```Bash
# Instalar EAS-CLI (Expo Application Services)
npm install -g eas-cli
```

- **EAS-CLI**

```Bash
# Verificar se está logado
eas whoami

# Logar no EAS (Expo Application Services)
eas login

# Deslogar do EAS (Expo Application Services)
eas logout

# Criar o projeto no EAS
eas build:configure

# Gerar APK local com EAS (android)
eas build -p android --profile preview --local

# Gerar APK remote com EAS (android)
eas build -p android --profile preview

# Gerar APK remoto de produção com EAS (android)
eas build -p android --profile production --message "first production deploy"
```

- [Google Play Console](https://play.google.com/intl/pt-BR/console/about "Google Play Console")

<details>
<summary><strong>Build iOS</strong></summary> 

<br />

```Bash
# Instalar Fastlane no macOS
brew install fastlane

# Gerar IPA local com EAS
npx eas build -p ios --profile preview --local

# Gerar IPA remoto com EAS
npx eas build -p ios --profile production
```

- 🇺🇸 [Primeiros passos com fastlane para iOS](https://docs.fastlane.tools/getting-started/ios/setup "Primeiros passos com fastlane para iOS")

</details>

<br>

## ⚖️ Licença

Este projeto está sobre a licença MIT. Veja em [LICENSE](https://github.com/gbdsantos/iweather/blob/master/LICENSE) para maiores informações.

---
Feito com ❤️ por 🧑‍🚀 Guilherme Bezerra 👋 [Entre em contato!](https://www.linkedin.com/in/gbdsantos/)