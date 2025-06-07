export default function AboutMe(){
    return (
        <div className="text-code">
            <span className="text-code-rows">1</span><span className="text-code-keywords">using</span> Creativity;<br/>
            <span className="text-code-rows">2</span><span className="text-code-keywords">using</span> Knowledges;<br/>
            <span className="text-code-rows">3</span><span className="text-code-keywords">using</span> Etc.*;<br/>

            <span className="text-code-rows">4</span><span className="text-code-keywords">namespace</span> React-Portfolio.AboutMe;<br/>

            <p className="text-comment">
                <span className="text-code-rows">5</span>/// &lt;summary&gt; <br/>
                <span className="text-code-rows">6</span>/// Hello, I'm Marina Sichova <br/>
                <span className="text-code-rows">7</span>/// Junior Software Developer.<br/>
                <span className="text-code-rows">8</span>/// &lt;/summary&gt;
            </p>

            <span className="text-code-rows">9</span><span className="text-code-keywords">public class </span><span className="text-code-class">AboutMe</span> : <span className="text-code-value">JuniorDeveloper</span><br/>
            <span className="text-code-rows">10</span>&#123;<br/>

            <span className="text-code-rows">11</span>&nbsp;&nbsp;<span className="text-code-keywords">public string</span> Personality =&gt; <br/> 
            <span className="text-code-rows">12</span>&nbsp;&nbsp;[<br/>
            <p className="reverse-hanging-indent"><span className="text-code-rows">13</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-value">"A person with a strong focus on creating robust and innovative software solutions."</span>,</p>
            <p className="reverse-hanging-indent"><span className="text-code-rows">14</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-value">"Who have a strong passion into coding and finding effective development solutions."</span></p>
            <span className="text-code-rows">15</span>&nbsp;&nbsp;];<br/>
                
            <br/>
                
            <span className="text-code-rows">16</span>&nbsp;&nbsp;<span className="text-code-keywords">public string</span>[] ProgrammingAndScriptingLanguages =&gt; <br/>
            <span className="text-code-rows">17</span>&nbsp;&nbsp;[<br/>
            <p className="reverse-hanging-indent"><span className="text-code-rows">18</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-value">"C#"</span>, <span className="text-code-value">"SQL"</span>,  <span className="text-code-value">"JavaScript"</span>, <span className="text-code-value">"PHP"</span>, <span className="text-code-value">"Java"</span>, <span className="text-code-value">"Python"</span></p>
            <span className="text-code-rows">19</span>&nbsp;&nbsp;];<br/>

            <br/>

            <span className="text-code-rows">20</span>&nbsp;&nbsp;<span className="text-code-keywords">public string</span>[] Technologies =&gt; <br/>
            <span className="text-code-rows">21</span>&nbsp;&nbsp;[<br/>
            <p className="reverse-hanging-indent"><span className="text-code-rows">22</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-value">"NoSQL"</span>, <span className="text-code-value">"HTML5/CSS"</span>, <span className="text-code-value">"SVG"</span></p>
            <span className="text-code-rows">23</span>&nbsp;&nbsp;];<br/>
            
            <br/>

            <span className="text-code-rows">24</span>&nbsp;&nbsp;<span className="text-code-keywords">public string</span>[] Learning =&gt; <br/>
            <span className="text-code-rows">25</span>&nbsp;&nbsp;[<br/>
            <p className="reverse-hanging-indent"><span className="text-code-rows">26</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-value">"React"</span>, <span className="text-code-value">"Azure"</span>, <span className="text-code-value">"Unit Testing"</span></p>
            <span className="text-code-rows">27</span>&nbsp;&nbsp;]; <br />

            <br/>

            <span className="text-code-rows">28</span>&nbsp;&nbsp;<span className="text-code-keywords">public string</span>[] Interests =&gt; <br/>
            <span className="text-code-rows">29</span>&nbsp;&nbsp;[ <br/>
            <p className="reverse-hanging-indent"><span className="text-code-rows">30</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-code-value">"I specialize in RESTful APIs, desktop and web applications, and web services using the .NET framework and ASP.NET Core MVC."</span></p>
            <span className="text-code-rows">31</span>&nbsp;&nbsp;]; <br />
            <br/>

            <p className="reverse-hanging-indent"><span className="text-code-rows">32</span>&nbsp;&nbsp;<span className="text-code-keywords">public</span> <span className="text-code-class">Uri</span> DownloadMyResume =&gt; <span className="text-code-keywords">new</span>(<span className="text-code-value">"</span><a className="text-code-keywords" href="https://marinadotnet.github.io/portfolio-react">https://marinadotnet.github.io/portfolio-react</a><span className="text-code-value">"</span>);</p>
            <br/>

            <p className="reverse-hanging-indent"><span className="text-code-rows">33</span>&nbsp;&nbsp;<span className="text-code-keywords">public</span> <span className="text-code-class">Uri</span> MyStaticPortfolio =&gt; <span className="text-code-keywords">new</span>(<span className="text-code-value">"</span><a className="text-code-keywords" href="https://marinadotnet.github.io">https://marinadotnet.github.io</a><span className="text-code-value">"</span>);</p>

            <span className="text-code-rows">34</span>&#125; 
        </div>
    );
}