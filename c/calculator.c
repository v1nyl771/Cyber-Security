#include <stdio.h>

int main()
{
	char cOpp;
	float NumA = 0;
	float NumB = 0;

	printf("Please enter you first number: ");
	scanf_s("%f", &NumA);
	printf("\n");

	printf("Enter your Operation +, -, *, /: ");
	scanf_s(" %c", &cOpp, 1);
	printf("\n");

	printf("Please enter your second number: ");
	scanf_s("%f", &NumB);
	printf("\n");

	if (cOpp == '+') {
		printf("Your answer is: %f", (NumA + NumB));
	}
	else if (cOpp == '-') {
		printf("Your answer is: %f", (NumA - NumB));
	}
	else if (cOpp == '*') {
		printf("Your answer is: %f", (NumA * NumB));
	}
	else if (cOpp == '/') {
		printf("Your answer is: %f", (NumA / NumB));
	}
	else {
		printf("Invalid Input!");
	}
	printf("\n\n\n\n\n");
	return 0;
}
