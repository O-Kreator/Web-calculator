# Web-calculator 🧮
Simple calculator app made with JavaScript. 

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FO-Kreator%2FWeb-calculator&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

---

# installation

You can build it by following command:
```shell
yarn
yarn build
```

Before deploying to your GitHub page, edit `predeploy` script in `package.json` to fit with your enviornmnent.
And execute:
```shell
yarn deploy
```

---

# Features

## Operation in order of entry
- Unlike scientific calculator, This executes numbers and operators in order of your input.
  - If you input `6 + 3 * 2`, it results `36`, not `12`.
- This is because it copied almost all of features of calculator application in Windows 10.

## Basic floating-point error mitigation
- Try `0.1 + 0.2`. It results `0.3`.
- Not supported when calculating square root.

## Nice and cool dark mode
- Turn on and off dark mode by toggling the button in side menu, and it's cool. 😎

---

# Spec
- Uses Parcel to bundle, SCSS to styling, and JavaScript ES6+.

# Liscence
- MIT

---

# Feel free to comment!
I appreciate if you guys review the codes or give me pull requests to improve this. 🙏
