const programs = {
    "Hello World Program": {
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        output: "Hello, World!"
    },
    "Arithmetic Operations": {
        code: `#include <stdio.h>

int main() {
    int a = 10, b = 5;
    printf("Addition: %d\\n", a + b);
    printf("Subtraction: %d\\n", a - b);
    printf("Multiplication: %d\\n", a * b);
    printf("Division: %d\\n", a / b);
    printf("Modulus: %d\\n", a % b);
    return 0;
}`,
        output: "Addition: 15\nSubtraction: 5\nMultiplication: 50\nDivision: 2\nModulus: 0"
    },
    "Conditional Statements": {
        code: `#include <stdio.h>

int main() {
    int num = 10;
    if (num > 0) {
        printf("Positive number\\n");
    } else if (num < 0) {
        printf("Negative number\\n");
    } else {
        printf("Zero\\n");
    }
    return 0;
}`,
        output: "Positive number"
    },
    "Loops": {
        code: `#include <stdio.h>

int main() {
    // For loop
    printf("For loop: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", i);
    }
    
    // While loop
    printf("\\nWhile loop: ");
    int i = 0;
    while (i < 5) {
        printf("%d ", i);
        i++;
    }
    
    // Do-while loop
    printf("\\nDo-while loop: ");
    i = 0;
    do {
        printf("%d ", i);
        i++;
    } while (i < 5);
    
    return 0;
}`,
        output: "For loop: 0 1 2 3 4 \nWhile loop: 0 1 2 3 4 \nDo-while loop: 0 1 2 3 4 "
    },
    "Call by value and Call by Reference": {
        code: `#include <stdio.h>

void swapByValue(int a, int b) {
    int temp = a;
    a = b;
    b = temp;
}

void swapByReference(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    printf("Before swap by value: x = %d, y = %d\\n", x, y);
    swapByValue(x, y);
    printf("After swap by value: x = %d, y = %d\\n", x, y);
    
    printf("Before swap by reference: x = %d, y = %d\\n", x, y);
    swapByReference(&x, &y);
    printf("After swap by reference: x = %d, y = %d\\n", x, y);
    
    return 0;
}`,
        output: "Before swap by value: x = 10, y = 20\nAfter swap by value: x = 10, y = 20\nBefore swap by reference: x = 10, y = 20\nAfter swap by reference: x = 20, y = 10"
    },
    "Recursive Function": {
        code: `#include <stdio.h>

int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d\\n", num, factorial(num));
    return 0;
}`,
        output: "Factorial of 5 is 120"
    },
    "1D and 2D Arrays": {
        code: `#include <stdio.h>

int main() {
    // 1D array
    int arr[5] = {1, 2, 3, 4, 5};
    printf("1D array: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }

    // 2D array
    int arr2D[2][2] = {{1, 2}, {3, 4}};
    printf("\\n2D array: \\n");
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            printf("%d ", arr2D[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,
        output: "1D array: 1 2 3 4 5 \n2D array: \n1 2 \n3 4 "
    },
    "Program on Strings": {
        code: `#include <stdio.h>

int main() {
    char str[20] = "Hello, World!";
    printf("String: %s\\n", str);
    return 0;
}`,
        output: "String: Hello, World!"
    },
    "String Handling Functions": {
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[20] = "World";
    strcat(str1, str2);
    printf("Concatenated String: %s\\n", str1);
    printf("Length of str1: %lu\\n", strlen(str1));
    strcpy(str1, str2);
    printf("Copied String: %s\\n", str1);
    return 0;
}`,
        output: "Concatenated String: HelloWorld\nLength of str1: 10\nCopied String: World"
    },
    "Program on Structure": {
        code: `#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student s1;
    strcpy(s1.name, "John");
    s1.age = 20;
    printf("Name: %s, Age: %d\\n", s1.name, s1.age);
    return 0;
}`,
        output: "Name: John, Age: 20"
    },
    "Nested Structure": {
        code: `#include <stdio.h>

struct Address {
    char city[50];
    int pin;
};

struct Student {
    char name[50];
    int age;
    struct Address address;
};

int main() {
    struct Student s1;
    strcpy(s1.name, "John");
    s1.age = 20;
    strcpy(s1.address.city, "New York");
    s1.address.pin = 10001;
    printf("Name: %s, Age: %d, City: %s, PIN: %d\\n", s1.name, s1.age, s1.address.city, s1.address.pin);
    return 0;
}`,
        output: "Name: John, Age: 20, City: New York, PIN: 10001"
    },
    "Pointer to Structure": {
        code: `#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student s1 = {"John", 20};
    struct Student *ptr = &s1;
    printf("Name: %s, Age: %d\\n", ptr->name, ptr->age);
    return 0;
}`,
        output: "Name: John, Age: 20"
    },
    "Pointer to Pointer": {
        code: `#include <stdio.h>

int main() {
    int x = 10;
    int *ptr1 = &x;
    int **ptr2 = &ptr1;
    printf("Value of x: %d\\n", x);
    printf("Value of *ptr1: %d\\n", *ptr1);
    printf("Value of **ptr2: %d\\n", **ptr2);
    return 0;
}`,
        output: "Value of x: 10\nValue of *ptr1: 10\nValue of **ptr2: 10"
    },
    "Dynamic Memory Allocation": {
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *ptr, *new_ptr;
    int n = 5, i;

    // Using malloc
    ptr = (int *)malloc(n * sizeof(int));
    printf("Malloc: ");
    for (i = 0; i < n; i++) {
        ptr[i] = i + 1;
        printf("%d ", ptr[i]);
    }

    // Using calloc
    ptr = (int *)calloc(n, sizeof(int));
    printf("\\nCalloc: ");
    for (i = 0; i < n; i++) {
        printf("%d ", ptr[i]);
    }

    // Using realloc
    new_ptr = (int *)realloc(ptr, (n * 2) * sizeof(int));
    printf("\\nRealloc: ");
    for (i = 0; i < n * 2; i++) {
        printf("%d ", new_ptr[i]);
    }

    // Freeing memory
    free(ptr);
    free(new_ptr);

    return 0;
}`,
        output: "Malloc: 1 2 3 4 5 \nCalloc: 0 0 0 0 0 \nRealloc: 0 0 0 0 0 0 0 0 0 0 "
    },
    "File Read Write Operations": {
        code: `#include <stdio.h>

int main() {
    FILE *fptr;
    char filename[100] = "file.txt";
    char content[100] = "Hello, World!";

    // Write to file
    fptr = fopen(filename, "w");
    if (fptr == NULL) {
        printf("Error opening file\\n");
        return 1;
    }
    fprintf(fptr, "%s", content);
    fclose(fptr);

    // Read from file
    fptr = fopen(filename, "r");
    if (fptr == NULL) {
        printf("Error opening file\\n");
        return 1;
    }
    fscanf(fptr, "%s", content);
    printf("File content: %s\\n", content);
    fclose(fptr);

    return 0;
}`,
        output: "File content: Hello, World!"
    },
    "Copy one File to another File": {
        code: `#include <stdio.h>

int main() {
    FILE *fptr1, *fptr2;
    char ch;

    fptr1 = fopen("file1.txt", "r");
    fptr2 = fopen("file2.txt", "w");

    if (fptr1 == NULL || fptr2 == NULL) {
        printf("Error opening file\\n");
        return 1;
    }

    while ((ch = fgetc(fptr1)) != EOF) {
        fputc(ch, fptr2);
    }

    printf("File copied successfully\\n");

    fclose(fptr1);
    fclose(fptr2);

    return 0;
}`,
        output: "File copied successfully"
    },
    "Program on Stack": {
        code: `#include <stdio.h>
#define SIZE 5

int stack[SIZE];
int top = -1;

void push(int value) {
    if (top == SIZE - 1)
        printf("Stack is full\\n");
    else
        stack[++top] = value;
}

void pop() {
    if (top == -1)
        printf("Stack is empty\\n");
    else
        printf("Popped element: %d\\n", stack[top--]);
}

void display() {
    if (top == -1)
        printf("Stack is empty\\n");
    else {
        printf("Stack elements: ");
        for (int i = top; i >= 0; i--)
            printf("%d ", stack[i]);
        printf("\\n");
    }
}

int main() {
    push(10);
    push(20);
    push(30);
    display();
    pop();
    display();
    return 0;
}`,
        output: "Stack elements: 30 20 10 \nPopped element: 30\nStack elements: 20 10 "
    },
    "Program on Queue": {
        code: `#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int value) {
    if (rear == SIZE - 1)
        printf("Queue is full\\n");
    else {
        if (front == -1)
            front = 0;
        queue[++rear] = value;
    }
}

void dequeue() {
    if (front == -1 || front > rear)
        printf("Queue is empty\\n");
    else
        printf("Dequeued element: %d\\n", queue[front++]);
}

void display() {
    if (front == -1 || front > rear)
        printf("Queue is empty\\n");
    else {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++)
            printf("%d ", queue[i]);
        printf("\\n");
    }
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    display();
    dequeue();
    display();
    return 0;
}`,
        output: "Queue elements: 10 20 30 \nDequeued element: 10\nQueue elements: 20 30 "
    },
    "Linked List": {
        code: `#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

void printList(struct Node* n) {
    while (n != NULL) {
        printf("%d ", n->data);
        n = n->next;
    }
}

int main() {
    struct Node* head = NULL;
    struct Node* second = NULL;
    struct Node* third = NULL;

    head = (struct Node*)malloc(sizeof(struct Node));
    second = (struct Node*)malloc(sizeof(struct Node));
    third = (struct Node*)malloc(sizeof(struct Node));

    head->data = 1;
    head->next = second;

    second->data = 2;
    second->next = third;

    third->data = 3;
    third->next = NULL;

    printList(head);

    return 0;
}`,
        output: "1 2 3"
    },
    "Linear Search": {
        code: `#include <stdio.h>

int linearSearch(int arr[], int size, int key) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == key) {
            return i;
        }
    }
    return -1;
}

int main() {
    int arr[] = {2, 4, 0, 1, 9};
    int key = 1;
    int size = sizeof(arr) / sizeof(arr[0]);
    int result = linearSearch(arr, size, key);
    if (result == -1) {
        printf("Element not found\\n");
    } else {
        printf("Element found at index %d\\n", result);
    }
    return 0;
}`,
        output: "Element found at index 3"
    },
    "Binary Search": {
        code: `#include <stdio.h>

int binarySearch(int arr[], int size, int key) {
    int left = 0, right = size - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == key) {
            return mid;
        }
        if (arr[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int key = 4;
    int size = sizeof(arr) / sizeof(arr[0]);
    int result = binarySearch(arr, size, key);
    if (result == -1) {
        printf("Element not found\\n");
    } else {
        printf("Element found at index %d\\n", result);
    }
    return 0;
}`,
        output: "Element found at index 3"
    },
    "Bubble Sort": {
        code: `#include <stdio.h>

void bubbleSort(int arr[], int size) {
    for (int i = 0; i < size - 1; i++) {
        for (int j = 0; j < size - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {5, 1, 4, 2, 8};
    int size = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, size);
    printf("Sorted array: ");
    printArray(arr, size);
    return 0;
}`,
        output: "Sorted array: 1 2 4 5 8"
    },
    "Insertion Sort": {
        code: `#include <stdio.h>

void insertionSort(int arr[], int size) {
    for (int i = 1; i < size; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {12, 11, 13, 5, 6};
    int size = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, size);
    printf("Sorted array: ");
    printArray(arr, size);
    return 0;
}`,
        output: "Sorted array: 5 6 11 12 13"
    },
    "Quick Sort": {
        code: `#include <stdio.h>

void swap(int* a, int* b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {10, 7, 8, 9, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    printf("Sorted array: ");
    printArray(arr, n);
    return 0;
}`,
        output: "Sorted array: 1 5 7 8 9 10"
    }
};

function searchFunction() {
    const query = document.getElementById("searchBar").value.trim();
    const resultDiv = document.getElementById("result");

    if (programs[query]) {
        const program = programs[query];
        resultDiv.innerHTML = `
            <h3>${query}</h3>
            <pre><code>${program.code}</code></pre>
            <h4>Output:</h4>
            <pre>${program.output}</pre>
        `;
    } else {
        resultDiv.innerHTML = `<p>No matching program found. Please search from the specified programs only.</p>`;
    }
}

document.getElementById("searchButton").addEventListener("click", searchFunction);