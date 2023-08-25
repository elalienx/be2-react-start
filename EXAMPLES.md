# Examples

Table of contents:

1. [Local state (Getter and Setter in Java)](#local-state-getter-and-setter-in-java)
1. [Use effect (Constructor in Java)](#use-efect-constructor-in-java)
1. [Map function (for loop in Java)](#map-function-for-loop-in-java)
1. [Conditional rendering (if in Java)](#conditional-rendering-if-in-java)
1. [Ternary operation (if/else in Java)](#ternary-operation-ifelse-in-java)

## Local state (Getter and Setter in Java)

### React

```js
const [age, setAge] = useState(36);
```

### Java

```java
private int age = 36;

public int getAge() {
    return age;
}

public void setAge(int newAge) {
    age = newAge;
}
```

## Use efect (Constructor in Java)

### React

```js
useEffect(() => {
  // code to run at creation time
}, []);
```

### Java

```java
class App{
    public App() {
        // code to run at creation time
    }
}
```

## Map function (for loop in Java)

### React

```js
const Items = todos.map((item) => <Item key={item.id} item={item} />);`
```

### Java

```java
private final Array<Item> todos = fetchAPIData;

for(int i = 0; i < todos.size(); i++) {
    Item item = Item(item.get(i));
}
```

# Conditional rendering (if in Java)

### React

```js
const [hideButton, setHideButton] = useState(false);

render(<div>{hideButton & <button>Click me!</button>}</div>);
```

### Java

```java
private boolean hideButton = false;
private Button myButton = new Button("Click me!")

if (hideButton) {
    myButton.visible = false;
}

```

# Ternary operation (if/else in Java)

### React

```js
const isCompleted = false;

render(<div>{isCompleted ? "Yes" : "No"}</div>);
```

### Java

```java
private boolean isCompleted = false;
private String result = "";

if(isCompleted) {
    result = "Yes";
}
else {
    result = "No"
}
```
