# Sapore D'Italia — Site

Site institucional do restaurante italiano fictício **Sapore D'Italia**, feito para a disciplina **Ferramentas Web e UX** (Prof. Claudinei Dias / Centro Universitário Católica de Santa Catarina).

Construído com **HTML, CSS e JavaScript puro** (sem frameworks), com base no projeto de alta fidelidade do Figma. O site é dividido em **componentes**: cada parte da tela (header, banner, footer, etc.) fica numa pasta separada e é montada nas páginas.


> A raiz tem um `index.html` que redireciona pra `paginas/index.html` (a home de verdade).

## Estrutura de pastas

```
FERRAMENTAS_WEB_N3/
├── index.html                  # redireciona pra paginas/index.html
├── Biblioteca/                 # recursos compartilhados por todos
│   ├── cores.css               # variáveis de cor, largura, espaçamento + fonte
│   └── botoes.css              # estilos de botão
├── paginas/                    # as páginas do site
│   ├── index.html              # HOME
│   ├── entradas.html           # MENU - entradas
│   ├── massas.html             # MENU - massas
│   ├── pizzas.html             # MENU - pizzas
│   ├── doces.html              # MENU - doces
│   ├── reserva.html            # RESERVA (formulário)
│   └── contato.html            # CONTATO
└── componente-XXXX/            # um componente por pasta (ver lista abaixo)
    ├── componente-XXXX.html    # preview do componente sozinho
    ├── componente-XXXX.css     # estilos do componente
    ├── componente-XXXX.js      # injeta o HTML do componente
    └── img/                    # imagens do componente (quando tem)
```

## Componentes

Cada componente tem **3 arquivos**: `.css` (estilos), `.js` (monta o HTML na página) e `.html` (preview pra ver o componente sozinho).

| Componente | O que é |
|---|---|
| `componente-header` | Cabeçalho com logo, nome e menu |
| `componente-menu-hamburguer` | Menu que abre no celular |
| `componente-footer` | Rodapé com localização, redes e horário |
| `componente-banner` | Banner principal da home |
| `componente-michelin` | Card verde "Experiência Michelin" |
| `componente-especialidades` | Painel com os pratos em destaque |
| `componente-avaliacoes` | Carrossel de avaliações dos clientes |
| `componente-reservar` | Chamada "Garanta sua reserva" |
| `componente-frase-reservar` | Frase de incentivo à reserva |
| `componente-reserva` | Formulário "Reserve sua mesa" |
| `componente-selecao-menu` | Botões das categorias do cardápio |
| `componente-menu-entradas` | Lista de entradas |
| `componente-menu-massas` | Lista de massas |
| `componente-menu-pizzas` | Lista de pizzas |
| `componente-menu-doces` | Lista de doces |
| `componente-contato` | Redes sociais |
| `componente-localizacao` | Endereço + mapa + horário |
| `componente-foto-restaurante` | Foto da fachada |
| `componente-card-prato` | Card de prato reutilizável |

### Como o componente funciona

O `.js` é uma IIFE (função que roda sozinha) que injeta o HTML do componente exatamente no lugar onde o `<script>` foi colocado:

```js
(function () {
    var script = document.currentScript;          // pega o próprio <script>
    var html = `<header class="header">...</header>`;
    script.insertAdjacentHTML('beforebegin', html); // insere o HTML antes do script
})();
```

Pra usar numa página, linka o CSS no `<head>` e coloca o `<script>` onde quer que o componente apareça:

```html
<link rel="stylesheet" href="../componente-header/componente-header.css">
<script src="../componente-header/componente-header.js"></script>
```

## Biblioteca (recursos compartilhados)

A `Biblioteca/cores.css` centraliza tudo que se repete no site, então pra mudar uma cor, a largura ou o espaçamento, muda **num lugar só**:

```css
--vermelho        /* cor principal (header, footer) */
--verde           /* cards verdes */
--bege            /* fundo de cards */
--bege-claro      /* fundo geral */
--dourado         /* destaques (estrelas) */
--preto, --cinza, --branco
--largura-conteudo  /* largura padrão dos componentes */
--espaco-secao      /* espaço vertical entre os componentes */
```

## Páginas

1. **Home** — banner, Michelin, especialidades, avaliações e chamada de reserva.
2. **Menu** — 4 páginas (entradas, massas, pizzas, doces); os botões navegam entre elas.
3. **Reserva** — formulário de reserva + frase + botões do menu.
4. **Contato** — redes sociais, localização com mapa e foto do restaurante.
