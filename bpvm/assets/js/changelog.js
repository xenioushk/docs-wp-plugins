$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
      "Removed:": "<b>❌ Removed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Plugin translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }

  // Change only the version and date
  var metaData = ["1.4.9", "24/06/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, June 22 - v 1.4.9", ["Updated: Plugin for WordPress 6.8.1"]],
    ["2025, June, 04 - v 1.4.8", ["Fixed: Report downloading issue for the date range."]],
    ["2025, May, 25 - v 1.4.7", ["Added: Bar chart for visual voting report.", "Updated: Plugin report page.", "Fixed: Jquery UI issue for report page.", "Updated: Plugin dashboard widget.", "Updated: Plugin required composer packages."]],
    ["2025, May, 22 - v 1.4.6", ["Fixed: Extra message display issue below the share button.", "Updated: Plugin security nonce for submit votes and feedback form.", "Updated: Plugin options panel.", "Updated: Plugin for WordPress 6.8.1"]],
    ["2025, April, 25 - v 1.4.5", ["Updated: Support for the plugin addons.", "Updated: Plugin for WordPress 6.8"]],
    ["2025, April, 15 - v 1.4.4", ["Fixed: Namespace bug for the database table class.", "Fixed: Plugin current version fetching issue.", "Fixed: Voting box display issue for the new post."]],
    ["2025, April, 03 - v 1.4.3", ["Updated: Plugin activation and deactivation hook, plugin custom tables.", "Updated: Plugin for WordPress 6.7.2", "Updated: Plugin automatic updater & licnese page."]],
    ["2024, December, 08 - v 1.4.2", ["Updated: Plugin for WordPress 6.7.1", "Updated: Plugin share buttons.", "Fixed: Plugin styles."]],
    ["2024, July, 16 - v 1.4.1", ["Added: Offline purchase verification.", "Updated: Plugin for WordPress 6.5.5"]],
    ["2023, December, 03 - v 1.4.0", ["Update: Plugin options panel.", "Updated: plugin license page."]],
    ["2023, October, 25 - v 1.3.9", ["Update: Plugin voting report page.", "Updated: plugin license page."]],
    ["2023, October, 05 - v 1.3.8", ["Fixed: Plugin text translation issues.", "Updated: Plugin .POT file."]],
    ["2023, September, 14 - v 1.3.7", ["Fixed: Plugin text translation issues.", "Updated: Plugin .POT file."]],
    ["2023, September, 09 - v 1.3.6", ["Fixed: Plugin code issues.", "Fixed: Plugin translation issues.", "Updated: WooCommerce product voting addon to 1.1.1", "Updated: User Vote Tracker addon 1.0.7"]],
  ]
  generateDynamicLog(changeLogData)
})
