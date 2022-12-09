// 21. Merge Two Sorted Lists - LeetCode Challenge
// Category: singly-linked list
// Level: Easy
// https://leetcode.com/problems/merge-two-sorted-lists/

/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
//   function ListNode(val, next) {
//     val = list1[0];
//     next = list2[1];
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//     return [val, next];
//   }
//   return ListNode(list1, list2);

    let newList = new ListNode(0)
    return newList
};
