# 24- Event Capture, Propagation, Bubbling, Once

view demos [here](https://bayirdan.github.io/javascript30/25-event-capture-propagation-bubbling-once/index.html)

---

projenin amacı; iç içe olan bir yapıda, en içte olan bir elemanın eventListener'inin, üst kapsayıcılara etki etmemesini sağlamak.

```
<div class="one">
  <div class="two">
    <div class="three">
      ...
    </div>
  </div>
</div>
```

iç içe olan bir div yapısı ele alındığında, div'lere verilecek bir 'click' eventListener'i, herhangi bir div'e tıklandığında, kapsayıcı div'ler için de ayrı çalışacaktır. Bu eventListener'in kapsayıcı div'ler haricinde sadece tıklandığı div'de çalışması için `stopPropagation` yapısı kullanılır.

```
  const divs = document.querySelectorAll("div");

  function logText(e) {
    e.stopPropagation();
  }

  divs.forEach((div) =>
    div.addEventListener("click", logText, {
      capture: false,
    })
  );
```

eventListener içten dışa doğru ve dıştan içe doğru olmak üzere 2 ayrı sıra yapısına sahiptir. En içteki elemanda, kapsayıcılar haricinde 'click' event'inin çalışması için, içten dışa olan sıralama yapısı kullanılmalıdır. Bu sıralama `capture` yapısı ile sağlanır. `capture: false` olması içten dışa, `capture: true` olması dıştan içe bir sıralama sağlar.

```
  const button = document.querySelector("button");

  button.addEventListener(
    "click",
    {
      once: true,
    }
  );
```

`once: true` yapısı, 'click' eventListener'inin tek bir sefer kullanılmasını sağlar. Tek seferlik 'click' kullanılacak sistemlerde bu yapı kullanılır.
