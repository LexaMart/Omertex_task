# Omertex Task

![image](https://user-images.githubusercontent.com/56229270/124313974-572d1f00-db7a-11eb-8ccd-67fd686b0a6d.png)
<p>The task was to make a similar form</p>


![image](https://user-images.githubusercontent.com/56229270/124314492-2699b500-db7b-11eb-9aa9-29746b88cd23.png)
<p>The form should fit the following requirements</p>

![image](https://user-images.githubusercontent.com/56229270/124314575-4630dd80-db7b-11eb-93b0-6e05ff8f6649.png)
<p>Result of the work </p>

<h2>Exploitation Rules</h2>
<ul>
  <li> Choose manual of automatic fields filling</li>
  <li> Fields with red(orange) mark MUST be filled in manual mode. If they don't You will be informed with alert message about it</li>
  <li> All fields are verified with regular expressions. If you fill a field with wrong expression a text inside will be red</li>
  <li>After filling the fields you may see the result by pressing a save button then you will see the result in console. Result is represented by object</li>
  <li>If you have choosen the automatic mode, fields will be filled with default values</li>
  <li>Reset button just refresh the tab after asking a confirmation</li>
  <li>Refresh name button DO NOTHING. It is just spinning </li>
</ul
 
  <h2>Regular Expressions</h2>
  <ul>
  <li>IP(wifi/ethernet): 0.0.0.0 - 255.255.255.255</li>
  <li>Gateaway(wifi/ethernet): 0.0.0.0 - 255.255.255.255 </li>
  <li>Subnet Mask(wifi/ethernet): Easier to give an examples. 255.0.0.0, 192.0.0.0</li>
  <li>DNS(wifi/ethernet): 0.0.0.0 - 255.255.255.255</li>
  <li>Wifi password: at least 8 symbols, should contain at least one letter, one number, one special mark. EXAMPLE: 123456AA! </li>
</ul>

<h1>DEPLOY: https://optimistic-blackwell-7949c3.netlify.app/</h1>
