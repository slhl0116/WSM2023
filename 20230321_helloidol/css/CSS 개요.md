# style 적용 세 가지 방법
1. <... style="..."> in HTML
2. ```<style>...</style>``` in HTML <head>
3. __.css 파일 만들어서 link__

# 형식 
```css
selector {
    attribute: value;   /*comment*/
}

```

## selector

<pre>
a == anchor(닻)
href == Hyperlink REFrence(참조) 

selector
* == 전체 적용 시킴. ex. 브라우저에서 여백을 없앰. 대표적으로 margin, padding
#id == 한 개의 태그에만 쓸 수 있음
.class == 여러 개의 태그에 적용 시킬 수 있음

전체 적용 시킴. ex. 브라우저에서 여백을 없앰. 대표적으로 margin, padding


한 개의 태그에만 쓸 수 있음
#id

주어진 값을 class 속성값으로 가진 html요소를 찾아
.class


TAG

자손 결합자, 첫 번째 요소의 자손인 노드를 선택
selector1 selector2

자식 결합자, 첫 번째 요소의 바로 아래 자손인 노드 선택
selector1 요소의 자식 중 모든 selector2
selector1 > selector2   

선택자 목록, 일치하는 모든 요소를 선택
selector1, selector2

인접 형제 결합자, 바로 뒤에 있는 요소 한 개를 선택(앞 요소 바로 뒤의 요소)
selector1의 첫째 자매 selector2 하나 선택
(selector1은 선택되지 x)
selector1 + selector2   

일반 형제 선택자, 예를 들어 A와 B라는 태그가 있을 때, 같은 계층에 있으면 A 뒤에 있는 모든 선택자를 지정
p ~ ul: p 요소 뒤에 있는 모든 형제 ul 선택
selector1 의 자매 중 모든 selector2 선택
selector1 ~ selector2   

selector 요소 중 첫 번째
selector1:first-child()

자매 요소 중에서 특정 순서(n)에 있는 요소를 선택할 때 사용함
selector1:nth-child(n)

요소의 마우스가 올라가는 동안 selector를 선택
selector:hover
</pre>

[속성="값"] <TAG 속성 ="값">인 모든 요소 선택

# 우선순위
1. !important
2. #id
3. .class
4. TAG
5. \*
- 구체 > 포괄
- 같은 우선순위일 때, 나중에 쓴 게 적용 