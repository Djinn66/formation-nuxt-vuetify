# TypeScript pour Vue 3

## Evolutions de Vue pour TypeScript
### La syntaxe "Script Setup"

Bien que le passage de la version 3.1 de Vue à la 3.2 soit mineur, il a été majeur pour la prise en charge de TypeScript. Cette nouvelle version de Vue fait passer la composition API en **Script Setup** ce qui simplifie l'utilisation de TypeScript dans le framework JS.

```html
// Composition API (original >3.0 < 3.1)
<script>  
import { ref } from 'vue'

export default{
	setup(){
		const title = ref('Hello')
		return { title }
	}
}
</script>

// Composition API (Script Setup > 3.2)
<script setup>  
import { ref } from 'vue'
	
const title = ref('Hello')
</script>
```  


Ce tutoriel sera accès sur l'utilisation de Typescript en VueJS `<script setup>`. Assurez vous d'être familier avec [TypeScript](https://www.vuemastery.com/courses/vue3-typescript/why-vue-&-typescript), la [Composition API](https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api) et la syntaxe `<script setup>`.

### Configuration

Pour configurer les composants `.vue` en composition API Script Setup, il suffit d'ajouter le paramètre setup dans la balise `script`. Pour l'utilisation de TypeScript il suffit d'ajouter le paramètre `lang` avec la valeur `"ts"`. Ce qui donne :

  ```html
<script  setup  lang="ts">  
	
</script>
```  

Vous pouvez activer cette option sur tous vos composants.

### Les Composants Génériques

La version 3.3 de Vue ajoute la possibilité de créer des Types pour les composants génériques.

```html
<script  setup  lang="ts"  generic="T">  
	defineProps<{  
		items:  T[]  
		selected:  T  
	}>()  
</script>
```
La valeur de `generic` fonctionne exactement de la même manière que la liste de paramètres entre `<...>` dans TypeScript. Par exemple, vous pouvez utiliser plusieurs paramètres, des contraintes "extends", des types par défaut et des types importés de référence.

```html
<script  setup  lang="ts"  generic="T  extends  string  |  number,  U  extends  Item"  >
	import  type  {  Item  }  from  './types'  
	defineProps<{  
		id:  T  
		list:  U[]  
	}>()  
</script>
```

## L'Inférence de Type

L'inférence de Type permet à Typescript de déduire le type d'un élément sans avoir à lui définir.


### Variables Réactives


📃 **/src/App.vue**

```html  
<script setup lang="ts">  
import { ref } from 'vue';  
const count = ref(0);  
  
</script>  
  
```  

Toutes les variables réactives de Vue ( Ref, Reactive, Computed et Props) sont interprétées par l'inférence de type.
Le code ci-dessus ressemble à du JavaScript classique car le type des variables est inféré par TypeScript lors de leurs déclarations.



> En positionnant le curseur sur le nom de la `ref` TypeScript indique bien le type de la variable qu'il a déduit lors de la déclaration de celle-ci.


### Template

Utilisons cette variable dans la partie template de notre composant :

📃 **/src/App.vue**

```html  
<template>  
  <div>  
	 <h1>{{ appInfo.name }}</h1>  
	 <h2>{{ appInfo.slogan }}</h2>  
  </div>  
  <p>{{ count }}</p>  
</template>  
  
```  


> En positionnant le curseur sur la variable `count` utilisée dans la balise template, TypeScript indique le type  `number` et non `Ref<number>`.



Template déstructure automatiquement l'objet  `Ref` pour utiliser le paramètre `value`.

##  Typage manuel
L'utilisation de *TypeScript* consiste donc à naviguer entre le typage automatique et le typage manuel si nécessaire. Lorsque la variable est de type Objet par exemple, il faudra créer une interface ou un type qui définira l'Objet.

La suite du tutoriel répertorie les différentes façons de typer les variables réactives et les fonctions de VueJS.


### Props
```html
<script setup lang="ts">
	import User from "~/types";
	
	interface Props {
		count: number | string;
		users: Array<User>;
		selected?: User;
	}
	
	const props = defineProps<Props>();
	
</script>
```

### Refs
```html
<script setup lang="ts">
	import User from "~/types";
	
	const user = ref<User|null>(null);
	
</script>
```

### Computed
```html
<script setup lang="ts">
	const double =  computed<number>(()  =>  {  
		// Erreur TypeScript si le return n'est pas de type number  
	})
</script>
```

### Emits

```html
<script setup lang="ts">
	const emit = defineEmits<{
		'update:modelValue':[value:'dark'|'light'],
		change:[value: string]
	}>()
</script>
```

### Les Fonctions
```html
<script setup lang="ts">

	/** fonctions liées aux événements */
	function  handleChange(event:  Event) {  
		console.log((event.target  as  HTMLInputElement).value)  
	}

	const handleClick = (event: MouseEvent) => {
		console.log((event.target  as  HTMLInputElement).value)
	}

	/** fonction avec type générique et valeur de retour */
	const deleteItem = <GenericType extends {id: number}>(item: GenericType): <"success"|"error"> => {
		// logique de suppression d'un item
		// doit retourner "success" ou "error" 
	}
</script>
```

> Tutoriel basé sur la documentation de VueJs ( version actuelle : 3.3.7 ) et sur le cours [TypeScript Friendly Vue 3](https://www.vuemastery.com/courses/typescript-friendly-vue3/introduction-to-the-script-setup-syntax)  par *Andy Li*
