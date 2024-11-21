#include <stdio.h>

struct integers {
	int iValues[7];
};

void bubbleSort(int arr[], int n) {
	int a, b;
	for (a = 0; a < n - 1; a++) {
		int swap = 0;
		for (b = 0; b < n - 1; b++) {
			if (arr[b] > arr[b + 1]) {
				int temp = arr[b];
				arr[b] = arr[b + 1];
				arr[b + 1] = temp;
				swap = 1;
			}
		}
		if (swap == 0) {
			break;
		}
	}
};

int main() {
//201 TL 205 M 187 TR, 186 S, 200 BL 188 BR
	printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", 201, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 187);
	printf("%cBubble Sorter\t%c\n", 186, 186);
	printf("%cCreated by:\t%c\n", 186, 186);
	printf("%cVinyl F.\t%c\n", 186, 186);
	printf("%c11-15-23\t%c\n", 186, 186);
	printf("%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c%c\n", 200, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 205, 188);

	struct integers iUnsorted;

	printf("First, enter 7 integers.\n\n");

	for (int i = 0; i < 7; i++) {
		scanf_s("%d", &iUnsorted.iValues[i]);
	}

	bubbleSort(iUnsorted.iValues, 7);

	printf("\nThank you!\n");
	printf("Here is your sorted array: \n\n");

	for (int i = 0; i < 7; i++) {
		printf("%d ", iUnsorted.iValues[i]);
	}
	printf("\n");
	return 0;
}
