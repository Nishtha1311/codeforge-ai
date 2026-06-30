const problems = [
  {
    title: "Two Sum",
    slug: "two-sum",
    functionName: "twoSum",

    difficulty: "Easy",

    tags: ["Array", "Hash Table"],

    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",

    examples: [
      {
        input: "nums=[2,7,11,15], target=9",
        output: "[0,1]",
        explanation: "nums[0]+nums[1]=9",
      },
    ],

    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
    ],

    starterCode: {
      javascript: `function twoSum(nums, target) {

}`,
    },

    sampleTestCases: [
      {
        input: "[2,7,11,15],9",
        output: "[0,1]",
      },
    ],

    hiddenTestCases: [
      {
        input: "[3,2,4],6",
        output: "[1,2]",
      },
      {
        input: "[3,3],6",
        output: "[0,1]",
      },
    ],

    acceptanceRate: 54,

    likes: 52000,

    dislikes: 1700,
  },

  {
    title: "Binary Search",

    slug: "binary-search",

    functionName: "search",

    difficulty: "Easy",

    tags: ["Binary Search"],

    description:
      "Given a sorted array of integers nums and a target, return its index.",

    examples: [],

    constraints: [],

    starterCode: {
      javascript: `function search(nums,target){

}`,
    },

    sampleTestCases: [
      {
        input: "[-1,0,3,5,9,12],9",
        output: "4",
      },
    ],

    hiddenTestCases: [
      {
        input: "[-1,0,3,5,9,12],2",
        output: "-1",
      },
    ],

    acceptanceRate: 58,

    likes: 17000,

    dislikes: 500,
  },

  {
    title: "Valid Parentheses",

    slug: "valid-parentheses",

    functionName: "isValid",

    difficulty: "Easy",

    tags: ["Stack"],

    description:
      "Determine whether the input string is valid.",

    examples: [],

    constraints: [],

    starterCode: {
      javascript: `function isValid(s){

}`,
    },

    sampleTestCases: [
      {
        input: `"()[]{}"`,
        output: "true",
      },
    ],

    hiddenTestCases: [
      {
        input: `"(]"`,
        output: "false",
      },
    ],

    acceptanceRate: 42,

    likes: 24000,

    dislikes: 900,
  },

  {
  title: "Reverse Linked List",

  slug: "reverse-linked-list",

  functionName: "reverseList",

  difficulty: "Easy",

  tags: ["Linked List"],

  description:
    "Given the head of a singly linked list, reverse the list and return the reversed list.",

  examples: [
    {
      input: "head=[1,2,3,4,5]",
      output: "[5,4,3,2,1]",
      explanation: "Reverse the linked list.",
    },
  ],

  constraints: [
    "The number of nodes is in the range [0,5000].",
  ],

  starterCode: {
    javascript: `function reverseList(head){

}`,
  },

  sampleTestCases: [
    {
      input: "[1,2,3,4,5]",
      output: "[5,4,3,2,1]",
    },
  ],

  hiddenTestCases: [
    {
      input: "[1,2]",
      output: "[2,1]",
    },
    {
      input: "[]",
      output: "[]",
    },
  ],

  acceptanceRate: 76,

  likes: 21000,

  dislikes: 500,
},

{
  title: "Maximum Subarray",

  slug: "maximum-subarray",

  functionName: "maxSubArray",

  difficulty: "Medium",

  tags: ["Array", "Dynamic Programming"],

  description:
    "Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.",

  examples: [
    {
      input: "nums=[-2,1,-3,4,-1,2,1,-5,4]",
      output: "6",
      explanation: "[4,-1,2,1] has the largest sum = 6.",
    },
  ],

  constraints: [
    "1 <= nums.length <= 10^5",
    "-10^4 <= nums[i] <= 10^4",
  ],

  starterCode: {
    javascript: `function maxSubArray(nums){

}`,
  },

  sampleTestCases: [
    {
      input: "[-2,1,-3,4,-1,2,1,-5,4]",
      output: "6",
    },
  ],

  hiddenTestCases: [
    {
      input: "[1]",
      output: "1",
    },
    {
      input: "[5,4,-1,7,8]",
      output: "23",
    },
  ],

  acceptanceRate: 52,

  likes: 36000,

  dislikes: 1800,
},

{
  title: "Best Time to Buy and Sell Stock",

  slug: "best-time-to-buy-and-sell-stock",

  functionName: "maxProfit",

  difficulty: "Easy",

  tags: ["Array", "Greedy"],

  description:
    "You are given an array prices where prices[i] is the price of a stock on the ith day. Return the maximum profit you can achieve.",

  examples: [
    {
      input: "prices=[7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy on day 2 and sell on day 5.",
    },
  ],

  constraints: [
    "1 <= prices.length <= 10^5",
    "0 <= prices[i] <= 10^4",
  ],

  starterCode: {
    javascript: `function maxProfit(prices){

}`,
  },

  sampleTestCases: [
    {
      input: "[7,1,5,3,6,4]",
      output: "5",
    },
  ],

  hiddenTestCases: [
    {
      input: "[7,6,4,3,1]",
      output: "0",
    },
    {
      input: "[2,4,1]",
      output: "2",
    },
  ],

  acceptanceRate: 56,

  likes: 31000,

  dislikes: 1200,
},

{
  title: "Valid Anagram",

  slug: "valid-anagram",

  functionName: "isAnagram",

  difficulty: "Easy",

  tags: ["Hash Table", "String"],

  description:
    "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",

  examples: [
    {
      input: 's="anagram", t="nagaram"',
      output: "true",
      explanation: "Both strings contain the same characters with the same frequency.",
    },
  ],

  constraints: [
    "1 <= s.length, t.length <= 5 × 10⁴",
    "s and t consist of lowercase English letters.",
  ],

  starterCode: {
    javascript: `function isAnagram(s, t){

}`,
  },

  sampleTestCases: [
    {
      input: '"anagram","nagaram"',
      output: "true",
    },
  ],

  hiddenTestCases: [
    {
      input: '"rat","car"',
      output: "false",
    },
    {
      input: '"listen","silent"',
      output: "true",
    },
  ],

  acceptanceRate: 66,

  likes: 25000,

  dislikes: 900,
},

{
  title: "Contains Duplicate",

  slug: "contains-duplicate",

  functionName: "containsDuplicate",

  difficulty: "Easy",

  tags: ["Array", "Hash Table"],

  description:
    "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",

  examples: [
    {
      input: "nums=[1,2,3,1]",
      output: "true",
      explanation: "The element 1 appears twice.",
    },
  ],

  constraints: [
    "1 <= nums.length <= 10⁵",
    "-10⁹ <= nums[i] <= 10⁹",
  ],

  starterCode: {
    javascript: `function containsDuplicate(nums){

}`,
  },

  sampleTestCases: [
    {
      input: "[1,2,3,1]",
      output: "true",
    },
  ],

  hiddenTestCases: [
    {
      input: "[1,2,3,4]",
      output: "false",
    },
    {
      input: "[5,5,5,5]",
      output: "true",
    },
  ],

  acceptanceRate: 61,

  likes: 18000,

  dislikes: 700,
},

{
  title: "Climbing Stairs",

  slug: "climbing-stairs",

  functionName: "climbStairs",

  difficulty: "Easy",

  tags: ["Dynamic Programming"],

  description:
    "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps. Return the number of distinct ways to reach the top.",

  examples: [
    {
      input: "n=2",
      output: "2",
      explanation: "1+1 or 2",
    },
  ],

  constraints: [
    "1 <= n <= 45",
  ],

  starterCode: {
    javascript: `function climbStairs(n){

}`,
  },

  sampleTestCases: [
    {
      input: "2",
      output: "2",
    },
  ],

  hiddenTestCases: [
    {
      input: "3",
      output: "3",
    },
    {
      input: "5",
      output: "8",
    },
  ],

  acceptanceRate: 55,

  likes: 22000,

  dislikes: 800,
},
{
  title: "Merge Two Sorted Lists",

  slug: "merge-two-sorted-lists",

  functionName: "mergeTwoLists",

  difficulty: "Easy",

  tags: ["Linked List"],

  description:
    "Merge two sorted linked lists and return the merged sorted list.",

  examples: [
    {
      input: "list1=[1,2,4], list2=[1,3,4]",
      output: "[1,1,2,3,4,4]",
      explanation: "Merge both sorted lists.",
    },
  ],

  constraints: [
    "The number of nodes in both lists is in the range [0,50].",
  ],

  starterCode: {
    javascript: `function mergeTwoLists(list1, list2){

}`,
  },

  sampleTestCases: [
    {
      input: "[1,2,4],[1,3,4]",
      output: "[1,1,2,3,4,4]",
    },
  ],

  hiddenTestCases: [
    {
      input: "[],[]",
      output: "[]",
    },
    {
      input: "[],[0]",
      output: "[0]",
    },
  ],

  acceptanceRate: 65,

  likes: 21000,

  dislikes: 900,
},

{
  title: "Move Zeroes",

  slug: "move-zeroes",

  functionName: "moveZeroes",

  difficulty: "Easy",

  tags: ["Array", "Two Pointers"],

  description:
    "Move all 0's to the end while maintaining the relative order of the non-zero elements.",

  examples: [
    {
      input: "[0,1,0,3,12]",
      output: "[1,3,12,0,0]",
      explanation: "Move all zeroes to the end.",
    },
  ],

  constraints: [
    "1 <= nums.length <= 10⁴",
  ],

  starterCode: {
    javascript: `function moveZeroes(nums){

}`,
  },

  sampleTestCases: [
    {
      input: "[0,1,0,3,12]",
      output: "[1,3,12,0,0]",
    },
  ],

  hiddenTestCases: [
    {
      input: "[0]",
      output: "[0]",
    },
  ],

  acceptanceRate: 63,

  likes: 19000,

  dislikes: 700,
},

{
  title: "Longest Common Prefix",

  slug: "longest-common-prefix",

  functionName: "longestCommonPrefix",

  difficulty: "Easy",

  tags: ["String"],

  description:
    "Find the longest common prefix string amongst an array of strings.",

  examples: [
    {
      input: '["flower","flow","flight"]',
      output: '"fl"',
      explanation: "The longest common prefix is fl.",
    },
  ],

  constraints: [
    "1 <= strs.length <= 200",
  ],

  starterCode: {
    javascript: `function longestCommonPrefix(strs){

}`,
  },

  sampleTestCases: [
    {
      input: '["flower","flow","flight"]',
      output: '"fl"',
    },
  ],

  hiddenTestCases: [
    {
      input: '["dog","racecar","car"]',
      output: '""',
    },
  ],

  acceptanceRate: 44,

  likes: 17000,

  dislikes: 600,
},

{
  title: "Longest Substring Without Repeating Characters",

  slug: "longest-substring-without-repeating-characters",

  functionName: "lengthOfLongestSubstring",

  difficulty: "Medium",

  tags: ["Hash Table", "Sliding Window"],

  description:
    "Return the length of the longest substring without repeating characters.",

  examples: [
    {
      input: '"abcabcbb"',
      output: "3",
      explanation: "abc is the longest substring.",
    },
  ],

  constraints: [
    "0 <= s.length <= 50000",
  ],

  starterCode: {
    javascript: `function lengthOfLongestSubstring(s){

}`,
  },

  sampleTestCases: [
    {
      input: '"abcabcbb"',
      output: "3",
    },
  ],

  hiddenTestCases: [
    {
      input: '"bbbbb"',
      output: "1",
    },
    {
      input: '"pwwkew"',
      output: "3",
    },
  ],

  acceptanceRate: 39,

  likes: 42000,

  dislikes: 1800,
},
{
  title: "Group Anagrams",

  slug: "group-anagrams",

  functionName: "groupAnagrams",

  difficulty: "Medium",

  tags: ["Hash Table", "Array", "String"],

  description:
    "Group the anagrams together in any order.",

  examples: [
    {
      input: '["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      explanation: "Words having the same sorted characters belong together.",
    },
  ],

  constraints: [
    "1 <= strs.length <= 10000",
  ],

  starterCode: {
    javascript: `function groupAnagrams(strs){

}`,
  },

  sampleTestCases: [
    {
      input: '["eat","tea","tan","ate","nat","bat"]',
      output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
    },
  ],

  hiddenTestCases: [
    {
      input: '[""]',
      output: '[[""]]',
    },
  ],

  acceptanceRate: 69,

  likes: 26000,

  dislikes: 1100,
},
{
  title: "Set Matrix Zeroes",

  slug: "set-matrix-zeroes",

  functionName: "setZeroes",

  difficulty: "Medium",

  tags: ["Array", "Matrix"],

  description:
    "Given an m x n matrix, if an element is 0, set its entire row and column to 0.",

  examples: [
    {
      input: "[[1,1,1],[1,0,1],[1,1,1]]",
      output: "[[1,0,1],[0,0,0],[1,0,1]]",
      explanation: "Zero out the row and column.",
    },
  ],

  constraints: [
    "1 <= m,n <= 200",
  ],

  starterCode: {
    javascript: `function setZeroes(matrix){

}`,
  },

  sampleTestCases: [
    {
      input: "[[1,1,1],[1,0,1],[1,1,1]]",
      output: "[[1,0,1],[0,0,0],[1,0,1]]",
    },
  ],

  hiddenTestCases: [
    {
      input: "[[0,1]]",
      output: "[[0,0]]",
    },
  ],

  acceptanceRate: 59,

  likes: 14000,

  dislikes: 900,
},
];

export default problems;