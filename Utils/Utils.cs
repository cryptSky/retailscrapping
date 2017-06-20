using System.Text.RegularExpressions;

namespace RetailScraping.Utils
{
    public class Utils
    {
        public static string Unescape(string input)
        {
            var output = Regex.Replace(input, @"\\[rnt]", m =>
            {
                switch (m.Value)
                {
                    case @"\r": return "\r";
                    case @"\n": return "\n";
                    case @"\t": return "\t";
                    default: return m.Value;
                }
            });

            output = output.Replace($"\"", $"'");
            return output;
        }
    }
}
